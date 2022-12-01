import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    font-family: sans-serif;
    width: 100%;
    max-width: 26rem;
    height: 100vh;
    margin: auto;
    position: relative;
    background-color: #FCFCFB;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: #002020;
    margin: 0;
    
    margin: auto;
    /*웹 배경 이미지색 맞추기*/
    background-color: #DDE7E8;
    /*단어 넘치면 쪼개기*/
    word-break: break-all;
    /* 드래그 방지 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* 사파리에서 input 클릭시 확대되는 오류 */
    -webkit-overflow-scrolling: touch;

    div {
      font-family: "Noto Sans KR", sans-serif;
    }

    /*텍스트 줄 높이*/
    line-height: normal;
  }

  @media all and (min-width: 360px) and (max-width: 899px) {
    body {
      /*웹 배경 이미지색 맞추기*/
      background-color: #DDE7E8;
    }
  }

  /*배경이미지보고 다시 조정하기*/
  @media all and (min-width: 900px) and (min-height: 500px) {
    body {
      background: url("/background.jpg") no-repeat center;
      background-color: #DDE7E8;
      background-size: cover;
    }
  }

  /*엘리먼트 전체 적용*/
  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    resize: none;
    /* 인풋 포커스 해제 */
    &:focus {
    outline: none;
    }
    /*스크롤바 숨기기*/
    &::-webkit-scrollbar {
    display: none;
    }
  }
  textarea {
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
  }

  /*버튼 배경제거, 테두리 제거 */
  button {
    background: none;
    border: none;
    color: #002020;
    cursor: pointer;
  }

  /*사진 미리보기 작게*/
  .preimg {
    max-width: 4.4rem;
    max-height: 4.4rem;
    margin: auto;
  }

  /*사진 미리보기 크게*/
  .bigImg {
    margin: auto;

    display: block;
    max-width: 90%; 
    max-height: 90%;
  }

`;

export default GlobalStyle;
