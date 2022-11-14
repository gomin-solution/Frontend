import { Header1 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";

function MyInfo() {
  return (
    <>
      <Header1 title={"마이페이지"} />
      <Stcontainer>내 정보</Stcontainer>
      <Footer title={"마이페이지"} />
    </>
  );
}

export default MyInfo;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 5rem);
`;
