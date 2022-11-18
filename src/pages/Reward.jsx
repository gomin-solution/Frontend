import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";
import { MenuDial3 } from "../elements/MenuDial";

function Reward() {
  return (
    <>
      <Header4 title={"수집함"} />
      <Stcontainer>
        <MenuDial3 />
      </Stcontainer>
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
