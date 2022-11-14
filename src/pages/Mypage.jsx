import { Header1 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";

const Mypage = () => {
  return (
    <>
      <Header1 title={"마이페이지"} />
      <Stcontainer>마이페이지</Stcontainer>
      <Footer />
    </>
  );
};

export default Mypage;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 5rem);
`;
