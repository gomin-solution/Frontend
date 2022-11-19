import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";

function Reward() {
  return (
    <>
      <Header4 title={"수집함"} />
      <Stcontainer></Stcontainer>
      <Footer title={"수집함"} />
    </>
  );
}

export default Reward;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 5rem);
`;
