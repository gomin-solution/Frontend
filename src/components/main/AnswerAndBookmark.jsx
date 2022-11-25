import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AnswerAndBookmark = () => {
  const nav = useNavigate();

  const lists = [
    { title: "답변을 기다리고 있는 내 고민", nav: "#" },
    { title: "북마크 한 고민", nav: "/bookmark" },
  ];

  return (
    <>
      {lists.map((list, idx) => (
        <StContainer key={idx} onClick={() => nav(`${list.nav}`)}>
          {list.title}
          <KeyboardArrowRightIcon sx={{ color: "#19696A" }} />
        </StContainer>
      ))}
    </>
  );
};

export default AnswerAndBookmark;

const StContainer = styled.div`
  background-color: ${(props) => props.theme.Colors.foot};
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem ${(props) => props.theme.paddings.xsm};
  margin-bottom: ${(props) => props.theme.margins.xsm};
`;
