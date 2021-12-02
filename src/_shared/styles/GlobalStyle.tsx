import { css, Global } from '@emotion/react';

const GlobalStyle = () => <Global styles={globalStyle} />;

const globalStyle = css`
  @font-face {
    font-family: 'netmarbleM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.1/netmarbleM.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'netmarbleB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.1/netmarbleB.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

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

  body {
    font-family: 'netmarbleM', serif;
  }

  a {
    display: block;
    text-decoration: none;
    color: black;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
  }

  img {
    width: auto;
    height: auto;
  }

  dialog {
    margin: 0;
  }
`;

export default GlobalStyle;
