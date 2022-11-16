import { Header1 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";

function Message() {
  return (
    <>
      <Header1 />
      <Stcontainer>Message</Stcontainer>
      <Footer />
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
