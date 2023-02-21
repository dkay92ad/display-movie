import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
  color: inherit;
}

`;

export const theme = {
  fontSizes: {
    base: "1rem",
    default: "1.6rem",
    medium: "2rem",
    large: "3rem",
  },
  colors: {
    primary: "#378827",
    lightPrimary: "#ecffc7",
    secondary: "#cbc00c",
    lightSecondary: "#f9f49c",
    // lightSecondary: "#b0c9eb",
    customWhite: "#eee",
    customBlack: "#333",
    white: "#fff",
    black: "#000",
    error: "red",
    warning: "amber",
    golden: "#cbc00c",
    blue: "blue",
  },
};
