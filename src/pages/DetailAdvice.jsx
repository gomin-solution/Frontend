import styled from "styled-components";
import { Header1 } from "../elements/Header";

function DetailAdvice() {
  return (
    <>
      <Header1 title={"고민접기"} />
      <Stcontainer>메세지</Stcontainer>
    </>
  );
}

export default DetailAdvice;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);
`;
