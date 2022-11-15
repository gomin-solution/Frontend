import ChoiceForm from "../components/form/ChoiceForm";
import { Header1 } from "../elements/Header";
import styled from "styled-components";

function ChoicePost() {
  return (
    <>
      <Header1 title={"글 작성"} />
      <Stcontainer>
        <ChoiceForm />
      </Stcontainer>
    </>
  );
}

export default ChoicePost;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  padding: ${(props) => props.theme.paddings.xxl};
  height: calc(100vh - 4rem);
`;
