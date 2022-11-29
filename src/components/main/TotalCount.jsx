import dayjs from "dayjs";
import styled from "styled-components";
import { FlexCenter } from "../../shared/css";

const TotalCount = ({ totalCount }) => {
  const nowTime = dayjs().format("YYYY-MM-DD HH:mm");

  return (
    <StContainer>
      <StWrap>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <StTitle>지금까지 해결된 고민</StTitle>
          <div style={{ fontSize: "0.875rem", color: "#95B0B0" }}>
            {nowTime} 기준
          </div>
        </div>
        <div style={{ fontSize: "3.5rem", fontWeight: "600" }}>
          {totalCount}
        </div>
      </StWrap>
    </StContainer>
  );
};

export default TotalCount;

const StContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: 6rem;
  color: ${(props) => props.theme.Colors.blueGreen3};
`;

const StWrap = styled.div`
  background-color: ${(props) => props.theme.Colors.foot};
  ${FlexCenter}
  column-gap: 5%;
  padding: 1rem;
`;

const StTitle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;
