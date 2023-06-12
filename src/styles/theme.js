import mixins from './mixins';

const light = {
  darknavy: '#DBE3EB',
  navy: '#DDE6ED',
  lightnavy: '#BDB8BC',
  lightestnavy: '#2A5074',
  navyshadow: 'rgba(2, 12, 27, 0.7)',
  darkslate: '#000000',
  slate: '#082032',
  lightslate: '#082032',
  lightestslate: '#334756',
  white: '#fffbff',
  highlight: '#EF5A23',
  highlighttint: 'rgba(230, 57, 70, 0.1)',
};

const dark = {
  darknavy: 'rgba(2, 4, 15, 0.85)',
  navy: '#000000',
  lightnavy: '#011627',
  lightestnavy: '#2A5074',
  navyshadow: 'rgba(2, 12, 27, 0.7)',
  darkslate: '#495670',
  slate: '#ffffff',
  lightslate: '#DDE6ED',
  lightestslate: '#ffffff',
  white: '#e6f1ff',
  highlight: '#EF5A23',
  highlighttint: 'rgba(230, 57, 70, 0.1)',
};

const theme = isDark => {
  const colors = isDark ? dark : light;
  return {
    bp: {
      mobileS: `max-width: 330px`,
      mobileM: `max-width: 400px`,
      mobileL: `max-width: 480px`,
      tabletS: `max-width: 600px`,
      tabletL: `max-width: 768px`,
      desktopXS: `max-width: 900px`,
      desktopS: `max-width: 1080px`,
      desktopM: `max-width: 1200px`,
      desktopL: `max-width: 1400px`,
    },
    ...colors,
    mixins,
  };
};

export default theme;
