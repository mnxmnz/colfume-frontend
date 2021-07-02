import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: NotoSans;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;                                                                                                                                                                         
  }

  @font-face {
    font-family: "NotoSans";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/NotoSansKR-Regular.otf") format("truetype");
  }

  @font-face {
    font-family: "Junge";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/Junge-Regular.ttf") format("truetype");
  }
`;

export default GlobalStyle;
