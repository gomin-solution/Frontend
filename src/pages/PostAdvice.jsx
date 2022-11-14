import { useLocation } from "react-router-dom";
import AdviceForm from "../components/form/AdviceForm";
import { Header1 } from "../elements/Header";
import styled from "styled-components";

function AdvicePost() {
  const location = useLocation();
  const cate = location.state;

  return (
    <>
      <Header1 title={"글 작성"} />
      <Stcontainer>
        <AdviceForm cate={cate} />
      </Stcontainer>
    </>
  );
}

export default AdvicePost;

const Stcontainer = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  position: absolute;
  overflow-y: scroll;
  padding: ${(props) => props.theme.paddings.xxl};
`;
