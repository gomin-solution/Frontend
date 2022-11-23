import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function Reward() {
  const missions = [{}];

  return (
    <>
      <Header4 title={"수집함"} />
      <Stcontainer>
        <StWrap1>
          <span style={{ fontSize: "1.125rem" }}>등급</span>
          <span style={{ fontSize: "1.375rem", fontWeight: "600" }}>
            주니어 해결사
          </span>
        </StWrap1>
        <StWrap2>
          <span style={{ marginRight: "2rem" }}>해결한 고민 수</span>
          <span>45</span>
        </StWrap2>

        <StMissionWrap>
          <StMissionBox>
            <LockOutlinedIcon className="inner" />
          </StMissionBox>
          <StMissionBox>
            <QuestionMarkIcon className="inner" />
          </StMissionBox>
          <StMissionBox></StMissionBox>
        </StMissionWrap>
        <StMissionWrap>
          <StMissionBox>
            <LockOutlinedIcon className="inner" />
          </StMissionBox>
          <StMissionBox>
            <QuestionMarkIcon className="inner" />
          </StMissionBox>
          <StMissionBox></StMissionBox>
        </StMissionWrap>
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
  height: calc(100vh - 8rem);
  padding: ${(props) => props.theme.paddings.xl};
`;

/*주니어 해결사 등급*/
const StWrap1 = styled.div`
  height: 3rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75rem;
`;

/*주니어 해결한 고민수*/
const StWrap2 = styled.div`
  background-color: #2764be;
  color: white;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.margins.xl};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

/*미션 박스 감싸기*/
const StMissionWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
`;

const StMissionBox = styled.div`
  background-color: #d6e6e5;
  color: white;
  float: left;
  width: 33%;
  text-align: center;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .inner {
    position: absolute;
    width: 70%;
    height: 70%;
  }
`;

const stClearBox = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
