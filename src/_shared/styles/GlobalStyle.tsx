import { css, Global } from '@emotion/react';

const GlobalStyle = () => <Global styles={globalStyle} />;

const globalStyle = css`
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body {
    margin: 0;
    padding: 0;
  }

  a {
    display: block;
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
