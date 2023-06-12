module.exports = {
  general: {
    lastName: 'Burrus',
    firstName: 'Reginald',
    email: 'devandbeyond2020@gmail.com',
    company: 'AssuredDX',
    title: 'Software Engineer',
    location: 'Greenville, SC',
  },
  
  // techs: ['C#', 'Angular', 'React', '.NET', 'SQL', 'Python'],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/regdamon25',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/devandbeyond/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/devandbeyond',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/reginald-burrus-2194ab42/',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Posts',
      url: '/#posts',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  colors: {
    highlight: '#ff3344',
    lightDark: '#0d1b2a',
    dark: '#25466b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
