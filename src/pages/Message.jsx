import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";

function Message() {
  return (
    <>
      <Header4 title={"쪽지"} />
      <Stcontainer>메세지</Stcontainer>
      <Footer title={"쪽지"} />
    </>
  );
}

export default Message;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 9rem);
`;
