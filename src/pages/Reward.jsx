import { Header1 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";

function Reward() {
  return (
    <>
      <Header1 title={"획득한 종이"} />
      <Stcontainer>획득한 종이</Stcontainer>
      <Footer />
    </>
  );
}

export default Reward;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow-y: scroll;
`;
