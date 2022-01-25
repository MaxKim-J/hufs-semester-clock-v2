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
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1rem;
  }

  body {
    overscroll-behavior-y: none;
    background-color: rgba(0, 0, 0, 0.5);
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
    margin: 0;
    font-family: inherit;
  }

  select,
  input {
    font-family: 'netmarbleM', serif;
  }

  img {
    width: auto;
    height: auto;
  }

  dialog {
    margin: 0;
    border: none;
    background-color: transparent;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
    list-style: none;
  }
`;

export default GlobalStyle;
