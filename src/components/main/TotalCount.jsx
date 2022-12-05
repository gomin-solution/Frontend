import dayjs from "dayjs";
import styled from "styled-components";
import { FlexCenter } from "../../shared/css";

const TotalCount = ({ totalCount }) => {
  const nowTime = dayjs().format("YYYY-MM-DD HH:mm");

  return (
    <StContainer>
      <StWrap>
        <div>
          <StTitle>지금까지 해결된 고민</StTitle>
          <div style={{ fontSize: "0.875rem", color: "#95B0B0" }}>
            {nowTime} 기준
          </div>
        </div>
        <StCount>{totalCount}</StCount>
      </StWrap>
    </StContainer>
  );
};

export default TotalCount;

const StContainer = styled.div`
  width: 100%;
  height: 5rem;
  color: ${(props) => props.theme.Colors.blueGreen3};
`;

const StWrap = styled.div`
  background-color: ${(props) => props.theme.Colors.foot};
  ${FlexCenter};
  column-gap: 5%;
`;

const StTitle = styled.div`
  /* margin-bottom: 1rem; */
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

const StCount = styled.div`
  font-size: 3.5rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;
