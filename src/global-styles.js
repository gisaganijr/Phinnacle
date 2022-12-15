import { createGlobalStyle } from 'styled-components';
import { appBgColor } from 'variables';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-family: Roc Grotesk Light;
    font-size: ${props => `calc(${props.minFontSize}px + (${props.maxFontSize} - ${props.minFontSize}) * ((100vw - ${props.minVw}px) / (${props.maxVw} - ${props.minVw})))`};
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body.fontLoaded {
    font-family: Roc Grotesk Light;
  }

  #app {
    background-color: ${appBgColor};
    min-height: 100%;
    min-width: 100%;
  }

  h1 {
    font-family: Roc Grotesk Bold;
    margin: 0px;
    font-size: 3rem;
  }

  h2 {
    font-family: Roc Grotesk Bold;
    margin: 0px;
    font-size: 2rem;
  }

  h3 {
    font-family: Roc Grotesk Bold;
    margin: 0px;
    font-size: 1.5rem;
  }

  h4 {
    font-family: Roc Grotesk Medium;
    font-size: 1em;
    margin: 0px;
  }

  button {
    font-family: Roc Grotesk Medium;
  }

  p,
  label {
    line-height: 2rem;
  }

  p,
  label {
    font-size: 0.875rem;
    font-family: 'Roc Grotesk Light';
  }
`;

export default GlobalStyle;
