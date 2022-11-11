import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// 폰트부터 작업

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: #EBEEF3;
    @media all and (max-width: 768px) {
      .mobLayout {
          width: 100vw;
      }
    }
    @media all and (min-width: 768px) {
      /* background-size: contain;
      background-position: center;
      background-repeat: no-repeat; */
    }
  }
`;
