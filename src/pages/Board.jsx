import React, { useState } from "react";
import Advice from "../components/board/Advice";
import Choice from "../components/board/Choice";
import Footer from "../elements/Footer";
import { Header2 } from "../elements/Header";
import Dial from "../components/board/Dial";
import styled from "styled-components";

function Board() {
  const [boardCategory, setBoardCategory] = useState("choice");
  const menu = ["choice", "advice"];

  return (
    <>
      <Header2 title={"고민접기"} />
      <Stcontainer>
        {menu[0] === boardCategory ? (
          <>
            <StInnerWrap>
              <StBtn1 onClick={() => setBoardCategory("choice")}>
                골라주기
              </StBtn1>
              <StBtn2 onClick={() => setBoardCategory("advice")}>
                조언하기
              </StBtn2>
            </StInnerWrap>
            <Choice />
          </>
        ) : (
          <>
            <StInnerWrap>
              <StBtn2 onClick={() => setBoardCategory("choice")}>
                골라주기
              </StBtn2>
              <StBtn1 onClick={() => setBoardCategory("advice")}>
                조언하기
              </StBtn1>
            </StInnerWrap>
            <Advice />
          </>
        )}
      </Stcontainer>
      <div style={{ position: "absolute", bottom: "3rem", right: "0" }}>
        <Dial />
      </div>
      <Footer title={"고민접기"} />
    </>
  );
}

export default Board;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 8rem);
`;

const StInnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.margins.xxl};
  column-gap: 6rem;
`;

const StBtn1 = styled.button`
  width: 4rem;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding-bottom: 0.4rem;
  box-shadow: 0rem 0.1rem 0rem 0rem gray;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StBtn2 = styled.button`
  width: 4rem;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding-bottom: 0.4rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;
