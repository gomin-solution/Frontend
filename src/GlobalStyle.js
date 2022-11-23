import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    font-family: "Noto Sans KR", sans-serif;
    width: 100%;
    max-width: 26rem;
    height: 100vh;
    margin: auto;
    position: relative;
    background-color: #ffffff;
  }

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
    /* 사파리에서 input 클릭시 확대되는 오류 */
    -webkit-overflow-scrolling: touch;
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
      /* background-image: url("../src/image/background.png"); */
      /* background-size: contain;
      background-position: center;
      background-repeat: no-repeat; */
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

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  div {
    font-family: "Noto Sans KR", sans-serif;
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
  /*유저 프로필 이미지*/
  .userimg{
    max-width: 1.5rem;
    max-height: 1.5rem;
  }


  /*추가, 옆으로 정렬하기*/
  .flexbox {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  }


`;

export default GlobalStyle;
