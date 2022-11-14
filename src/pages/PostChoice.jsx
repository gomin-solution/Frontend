import ChoiceForm from "../components/form/ChoiceForm";
import styled from "styled-components";

function ChoicePost() {
  return (
    <Stcontainer>
      <ChoiceForm />
    </Stcontainer>
  );
}

export default ChoicePost;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);
`;
