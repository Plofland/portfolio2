import facepaint from 'facepaint';
import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
	mobile: '750px',
	tablet: '1025px',
	desktop: '1200px'
};

export const mq = facepaint(
	Object.values(breakpoints).map(
		(bp) => `@media (min-width: ${bp})`
	)
);

export const colors = {
	grayChateau: '#9EA9B3',
	darkLavender: '#0A1926',
	lightLavender: '#EBDBEB',
	darkText: '#222222',
	lightText: '#F9F9F9',
	cyanBlue: '#173755',
	cyanBlueTrans: 'rgba(23, 55, 85, 0.7)'
};

export const GlobalStyles = createGlobalStyle`

  *, *::after, *::before {
	box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
	background: ${colors.darkLavender};
	color: ${colors.lightText};
	font-family: 'Hammersmith One', -apple-system, sans-serif;
    text-rendering: optimizeLegibility;
  }
`;
