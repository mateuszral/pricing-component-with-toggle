import { createGlobalStyle } from 'styled-components';
import 'vendors/normalize.css';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, span {
    margin: 0;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
