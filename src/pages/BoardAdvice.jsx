import { useNavigate } from "react-router-dom";

import Advice from "../components/board/Advice";
import Footer from "../elements/Footer";
import { Header2 } from "../elements/Header";
import Dial from "../components/board/Dial";
import styled from "styled-components";
import { Container, FlexCenter } from "../shared/css";

function Board() {
  const nav = useNavigate();

  return (
    <>
      <Header2 title={"고민 접기"} />
      <Stcontainer>
        <StInnerWrap>
          <StBtn2 onClick={() => nav("/board-choice")}>골라주기</StBtn2>
          <StBtn1 onClick={() => nav("/board-advice")}>답해주기</StBtn1>
        </StInnerWrap>
        <Advice />
      </Stcontainer>
      <div style={{ position: "absolute", bottom: "2.5rem", right: "0.5rem" }}>
        <Dial />
      </div>
      <Footer title={"고민 접기"} />
    </>
  );
}

export default Board;

const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 8rem);
`;

const StInnerWrap = styled.div`
  ${FlexCenter};
  margin-top: ${(props) => props.theme.margins.xxl};
  column-gap: 4rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StBtn1 = styled.div`
  ${FlexCenter};
  color: ${(props) => props.theme.Colors.blueGreen3};
  width: 5rem;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding-bottom: 0.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.Colors.blueGreen3};
`;

const StBtn2 = styled.div`
  ${FlexCenter};
  width: 5rem;
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding-bottom: 0.4rem;
`;
