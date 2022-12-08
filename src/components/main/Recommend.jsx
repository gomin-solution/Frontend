import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Recommend = ({ recommend }) => {
  const nav = useNavigate();

  return (
    <StWrap>
      <StLeftText>추천글</StLeftText>
      <span className="cate">[{recommend?.category}]</span>
      <span
        className="over"
        onClick={() =>
          nav(`/board-advice/${recommend?.adviceId}`, { state: "/main" })
        }
      >
        {recommend?.title}
      </span>
    </StWrap>
  );
};

export default Recommend;

const StWrap = styled.div`
  margin-bottom: ${(props) => props.theme.paddings.xxl};
  font-size: ${(props) => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  .cate {
    color: ${(props) => props.theme.Colors.blueGreen3};
    font-weight: ${(props) => props.theme.fontWeights.xl};

    flex-grow: 0;
    flex-shrink: 0;
  }
  .over {
    margin-left: ${(props) => props.theme.margins.xxsm};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StLeftText = styled.div`
  width: 3.3rem;
  text-align: center;

  flex-grow: 0;
  flex-shrink: 0;

  background-color: ${(props) => props.theme.Colors.blueGreen3};
  color: ${(props) => props.theme.Colors.blueGreen1};
  padding: 0.3rem;
  margin-right: ${(props) => props.theme.margins.xxsm};
`;
