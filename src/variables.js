const colors = {
  white: '#ffffff',
  violet: '#8771B3',
  darkViolet: '#6658a6',
  lightGray: '#f0f0f0',
  darkGray: '#7D7D7D',
  medDarkGray: '#4b4b4b',
  veryDarkGray: '#404040',
  red:'#da523a',
  strongRed: '#bd3b24',
  blue: '#00a4e4',
  black: '#000000',
  orange:'#da523a',
  yellow:'#fcb94d',
  turquoise: '#138e91',
  cyan: '#00a4e4',
  darkCyan: '#138e91',
  footer: '#1e1e1e',
  black: '#000000'
}

const borderColor = {
  light: colors.lightGray,
  dark: colors.darkGray
}

const divider = {
  light: colors.white,
  dark: 'rgba(0, 0, 0, 0.23)'
}

const headerConfig = {
  minHeight: '64px',
  maxHeight: '64px'
}

const outlinedButton = {
  light: { color: colors.white, borderColor: divider.light},
  dark: { color: colors.veryDarkGray, borderColor: divider.dark},
}

const button = {
  outlined: { 
    gray: { color: colors.medDarkGray, borderColor: divider.dark}
  }
}

const customLoadingIndicatorMinDelay = 1500;
const imageCurtainColor = colors.veryDarkGray;
const preLoaderBgColor = colors.veryDarkGray;
const taglineColor = colors.medDarkGray;
const coverBgColor = colors.lightGray;
const appBgColor = colors.white;
const appWelcomeBgColor = colors.black;
const appBarMinHeight = 96;
const appBarPadding = '12px 12px 12px 24px'

const colorSettings = {
  primary: { normal: colors.darkGray, hover: colors.medDarkGray },
	red: { normal: colors.red, hover: colors.strongRed }
}

const contentMarginSmall = '1rem';
const pageContentMargin = '4rem';
const pageContentMarginSmall = '2rem';
const contentMargin = '2rem';

const iconColorConfig = {
  primary: { normal: colors.white, hover: colors.medDarkGray },
	red: { normal: colors.white, hover: colors.strongRed }
}

const globalTexts = {
  copyright: '©24DOTS — All rights reserved'
}

const iconSizeConfig = {
  extraSmall: { width: '15px', height: '15px' },
  small: { width: '20px', height: '20px' },
	medium: { width: '25px', height: '25px' },
	large: { width: '30px', height: '30px' }
}

const animationConfig = {
  zoom: { duration: 500 }
}

const margin = {
  page: {top: '40px', right: '40px', left: '40px', bottom: '40px'},
  button: '12px'
}

const pageMargin = {
  xs: { top: '56px', right: '36px', left: '36px', bottom: '56px' },
  sm: { top: '56px', right: '50px', left: '50px', bottom: '56px' },
  md: { top: '60px', right: '60px', left: '60px', bottom: '60px' },
  lg: { top: '60px', right: '40px', left: '40px', bottom: '60px' },
  xl: { top: '60px', right: '40px', left: '40px', bottom: '60px' },
}

const smallMargin = {
  page: {top: '12px', right: '12px', left: '12px', bottom: '12px'},
  button: '12px'
}

const sidebarDrawerTransitionDuration = {
  enter: 500,
  exit: 250
}

const sliderInterval = 100;

export {
  appBgColor,
  appWelcomeBgColor,
  button,
  animationConfig,
  colors,
  margin,
  headerConfig,
  pageMargin,
  smallMargin,
  iconColorConfig,
  iconSizeConfig,
  coverBgColor,
  taglineColor,
  colorSettings,
  globalTexts,
  sidebarDrawerTransitionDuration,
  borderColor,
  contentMargin,
  contentMarginSmall,
  pageContentMargin,
  pageContentMarginSmall,
  appBarMinHeight,
  appBarPadding,
  divider,
  outlinedButton,
  sliderInterval,
  preLoaderBgColor,
  customLoadingIndicatorMinDelay,
  imageCurtainColor,
}