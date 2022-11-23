import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";
import LockIcon from "@mui/icons-material/Lock";

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
          <span>해결한 고민 수</span>
          <span>45</span>
        </StWrap2>
        <StMissionWrap>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>?</StMissionBox>
          <StMissionBox>
            <LockIcon />
          </StMissionBox>
          <StMissionBox>
            <LockIcon />
          </StMissionBox>
          <StMissionBox>
            <LockIcon />
          </StMissionBox>
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
  height: calc(100vh - 9rem);
  padding: ${(props) => props.theme.paddings.xl};
`;

const StWrap1 = styled.div`
  height: 3rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75rem;
`;

const StWrap2 = styled.div`
  background-color: #2764be;
  color: white;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.margins.xl};
  padding: 0rem 3.25rem;
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StMissionWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const StMissionBox = styled.div`
  background-color: #449b9b;
  color: white;
  width: 6.5rem;
  height: 6.5rem;
  font-size: 5rem;
  text-align: center;
`;
