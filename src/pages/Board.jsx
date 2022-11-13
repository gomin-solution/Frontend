import React from "react";
import styled from "styled-components";
import Footer from "../elements/Footer";
import { Header2 } from "../elements/Header";

function Board() {
  return (
    <>
      <Header2 title={"게시판"} />
      <Stcontainer>게시판 내용~</Stcontainer>
      <Footer />
    </>
  );
}

export default Board;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow-y: scroll;
`;
