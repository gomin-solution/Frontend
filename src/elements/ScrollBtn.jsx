import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FlexCenter } from "../shared/css";

function ScrollBtn() {
  const goTop = () => {
    console.log("업");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StScrollBox>
      <StTopScroll onClick={goTop}>
        <KeyboardArrowUpIcon />
      </StTopScroll>
    </StScrollBox>
  );
}

export default ScrollBtn;

//스크롤 탑 버튼
const StTopScroll = styled.button`
  z-index: 999;

  border-radius: 3rem;
  height: 2rem;
  width: 5rem;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  position: absolute;
  bottom: 5rem;
  color: ${(props) => props.theme.Colors.bg1};
  background-color: ${(props) => props.theme.Colors.blueGreen2};
`;

//스크롤 버튼 감싸는 박스
const StScrollBox = styled.div`
  width: 100%;
  ${FlexCenter};
`;
