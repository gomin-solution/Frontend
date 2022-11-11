import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// 폰트부터 작업

export const GlobalStyle = createGlobalStyle`
  ${reset}

 /*폰트 가져오기 */
  @font-face {
      font-family: 'Noto Sans KR', sans-serif;
      src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");
  }

  :root {
    --vh: 100%;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
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
