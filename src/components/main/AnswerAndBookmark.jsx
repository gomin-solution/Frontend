import { useNavigate } from "react-router-dom";
import { LoginAlert } from "../../elements/Alert";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AnswerAndBookmark = () => {
  const nav = useNavigate();
  const userKey = localStorage.getItem("userKey");

  const lists = [
    { title: "내가 작성한 고민", nav: "/mypost" },
    { title: "북마크한 고민", nav: "/bookmark" },
  ];

  const navHandler = (navi) => {
    if (userKey) {
      nav(navi);
    } else {
      LoginAlert();
    }
  };

  return (
    <>
      {lists.map((list, idx) => (
        <StContainer key={idx} onClick={() => navHandler(`${list.nav}`)}>
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
  cursor: pointer;
`;
