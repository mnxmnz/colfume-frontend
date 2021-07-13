import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    color: #3E3E3E;
    font-family: NotoSans;
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;                                                                                                                                                                        
  }

  @font-face {
    font-family: "Junge";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/Junge-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumMyeongjo";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NanumMyeongjo-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "NotoSans";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NotoSansKR-Regular.otf") format("truetype");
  }

  @font-face {
    font-family: "Gotham";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/Gotham-Medium.otf") format("truetype");
  }
`;

export default GlobalStyle;
