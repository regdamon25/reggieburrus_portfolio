import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig, general } from '@config';
import { skills } from '../../skills';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';


const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledSkillsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledContainer = styled.div`
  /* Add your other styles here */
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 2rem; /* Adjust the padding as needed */
  max-width: 72rem; /* Adjust the max-width as needed */
`;

const StyledHeading = styled.h1`
  /* Add your other styles here */
  margin-bottom: 1rem; /* Adjust the margin-bottom as needed */
  font-size: 1.875rem; /* Adjust the font size as needed */
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 2.5rem; /* Adjust the font size for medium screens */
    margin-bottom: 2.5rem; /* Adjust the margin-bottom for medium screens */
  }
`;

const StyledSkillsList = styled.ul`
  margin:0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 48rem; /* Adjust the max-width as needed */
  @media screen and (max-width: 916px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
  }

  @media screen and (max-width: 858px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
`;

const StyledSkillImageWrapper = styled.div`
  /* Add your other styles here */
  padding: 1rem; /* Adjust the padding as needed */
  height: 3.5rem; /* Adjust the height as needed */
  width: 3.5rem; /* Adjust the width as needed */
  overflow: hidden;
`;

const StyledSkillImage = styled.img`
  /* Add your other styles here */
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledSkillText = styled.p`
  padding-left: 1rem; /* Adjust the left padding as needed */
  padding-right: 1rem; /* Adjust the right padding as needed */
  font-size: 0.875rem; /* Adjust the font size as needed */

  @media screen and (min-width: 768px) {
    font-size: 1rem; /* Adjust the font size for medium screens and above */
  }
`;




const StyledListItem = styled.li`
  /* Add your other styles here */
  &.m-1 {
    margin: 0.25rem;
  }

  &.md\\:m-2 {
    @media (min-width: 768px) {
      margin: 0.5rem;
    }
  }

  &.flex {
    display: flex;
  }

  &.items-center {
    align-items: center;
  }

  &.border {
    border: 0.5px solid;
  }

  &.dark\\:border-gray-700 {
    border-color: #2A5074;
  }

  &.rounded-xl {
    border-radius: 0.75rem;
  }

  &.overflow-hidden {
    overflow: hidden;
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${props => props.theme.higlight};
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: ${props => props.theme.higlight};

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: ${props => props.theme.navy};
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid ${props => props.theme.higlight};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <>
      <StyledAboutSection id="about" ref={revealContainer}>
        <h2 className="numbered-heading">About Me</h2>

        <div className="inner">
          <StyledText>
            <div>
              <p>
                Hi, my name is {general.firstName}. As a Full Stack Developer, I specialize in crafting robust applications using modern technologies such as .NET, Angular, and C#.
                My experience extends to managing data with SQL Server and Entity Framework Core, creating RESTful APIs, integrating payment processing systems, and implementing messaging services for effective communication.
                  I've built software for a agencies, start-ups and small businesses alike.
              </p>
              <p>
                My main focus these days is building at home healthcare solutions at {general.company}
                .
              </p>
              <p>When I'm not immersed in code, you can find me on the golf course, where I'm constantly in pursuit of my next tournament victory. Away from the greens,
                I love spending quality time with my wife, Sydney, and our two crazy Mini Aussies, Tweek and Mantequillas.</p>
            </div>
          
          
          
          </StyledText>

          <StyledPic>
            <div className="wrapper">
              <StaticImage
                className="img"
                src='../../images/avatar.png'
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
              />
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>

      <StyledSkillsSection>
        <StyledContainer className="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
          <StyledHeading className="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap">
        Skills
          </StyledHeading>
          <StyledSkillsList>
            {skills &&
                  skills.map(({ skillName, image }, i) => (
                    <StyledListItem className="m-1 md:m-2 flex items-center border dark:border-gray-700 rounded-xl overflow-hidden" key={i}>
                      <div className="icon-wrapper">
                        <StyledSkillImageWrapper className="p-4 h-14 w-14 overflow-hidden">
                          <StyledSkillImage src={image} alt={skillName} />
                        </StyledSkillImageWrapper>
                      </div>
                      <StyledSkillText className="px-4 text-sm md:text-base">{skillName}</StyledSkillText>
                    </StyledListItem>
                  ))}
          </StyledSkillsList>
        </StyledContainer>
      </StyledSkillsSection>
    </>
  );
};

export default About;
