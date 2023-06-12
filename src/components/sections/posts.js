import React, { useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledPostsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .posts-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledPost = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .post-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: ${props => props.theme.lightnavy};
    transition: var(--transition);
  }

  .post-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: ${props => props.theme.higlight};
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }

  .post-title {
    margin: 0 0 10px;
    color: ${props => props.theme.lightestslate};
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .post-description {
    color: ${props => props.theme.lightslate};
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .post-tag-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tags
              slug
            }
          }
        }
      }
    }
  `);

  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealPosts = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealContainer = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealPosts.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 3;
  const posts = data.posts.edges.filter(({ node }) => node);
  const firstTree = posts.slice(0, GRID_LIMIT);
  const postsToShow = firstTree;

  const postInner = node => {
    const { frontmatter } = node;
    const { slug, title, tags } = frontmatter;

    return (
      <div className="post-inner">
        <header>
          <div className="post-top">
            <div className="folder">
              <Icon name="Folder" />
            </div>
          </div>

          <h3 className="post-title">
            <a href={slug} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>
        </header>

        <footer>
          {tags && (
            <ul className="post-tag-list">
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledPostsSection id="posts" ref={revealContainer}>
      <h2 ref={revealTitle}>Interresting Posts</h2>

      <Link className="inline-link archive-link" to="/blogs" ref={revealArchiveLink}>
        view more
      </Link>

      <ul className="posts-grid">
        {prefersReducedMotion ? (
          <>
            {postsToShow &&
              postsToShow.map(({ node }, i) => <StyledPost key={i}>{postInner(node)}</StyledPost>)}
          </>
        ) : (
          <TransitionGroup component={null}>
            {postsToShow &&
              postsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledPost
                    key={i}
                    ref={el => (revealPosts.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {postInner(node)}
                  </StyledPost>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>
    </StyledPostsSection>
  );
};

export default Posts;