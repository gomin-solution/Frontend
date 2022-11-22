import styled from "styled-components";
import { Header1 } from "../elements/Header";

function Setting() {
  return (
    <>
      <Header1 title={"설정"} />
      <Stcontainer>Setting</Stcontainer>;
    </>
  );
}

export default Setting;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 5rem);
`;
