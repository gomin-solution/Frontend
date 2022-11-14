import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    width: 100vw;
    height: 100vh;
    margin: auto;

    /*웹 배경 이미지색 맞추기*/
    background-color: #536480;
    /*단어 넘치면 쪼개기*/
    word-break: break-all;
    /* 드래그 방지 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /*엘리먼트 전체 적용*/
  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    resize: none;
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  #root {
    font-family: "Noto Sans KR", sans-serif;
    width: 100%;
    max-width: 414px;
    height: 100vh;
    margin: auto;
    position: relative;
    background-color: #ffffff;
  }

  @media all and (min-width: 360px) and (max-width: 899px) {
    body {
      /*웹 배경 이미지색 맞추기*/
      background-color: #536480;
    }
  }

  /*배경이미지보고 다시 조정하기*/
  @media all and (min-width: 900px) and (min-height: 500px) {
    body {
      background-image: url("../src/image/background.png");
      /* background-size: contain;
      background-position: center;
      background-repeat: no-repeat; */
    }
  }
`;

export default GlobalStyle;
