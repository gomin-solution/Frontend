import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const AdviceList = ({ newRef, advice }) => {
  const nav = useNavigate();

  return (
    <StAdviceList
      ref={newRef}
      key={advice.adviceId}
      onClick={() => {
        nav(`/board-advice/${advice.adviceId}`);
      }}
    >
      <span style={{ marginBottom: "0.5rem", display: "flex" }}>
        <StCategory>[{advice.category}]</StCategory>&nbsp;
        <StTitle>{advice.title}</StTitle>
      </span>
      <StContent>{advice.content}</StContent>
      <StWrap>
        <div style={{ fontSize: "0.875rem" }}>
          <span>조회 {advice.viewCount}&nbsp;&nbsp;</span>
          <span>조언 {advice.commentCount}</span>
        </div>
        <span style={{ fontSize: "0.875rem" }}>
          {advice.createdAt.slice(0, 10)}
        </span>
      </StWrap>
    </StAdviceList>
  );
};

export default AdviceList;

const StAdviceList = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  height: 6rem;
  margin-bottom: ${(props) => props.theme.margins.xsm};
  padding: ${(props) => props.theme.paddings.sm};
`;

const StCategory = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.xl};
  color: #19696a;
`;

const StTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis; // 말줄임 적용
  white-space: nowrap; // 문장이 길어지면 다음 줄로 넘기는 것을 없앰
`;

const StContent = styled.p`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-top: ${(props) => props.theme.margins.sm};
  margin-bottom: ${(props) => props.theme.margins.xsm};
  overflow: hidden;
  text-overflow: ellipsis; // 말줄임 적용
  white-space: nowrap; // 문장이 길어지면 다음 줄로 넘기는 것을 없앰
  color: #1a1c1c;
`;

const StWrap = styled.div`
  color: ${(props) => props.theme.Colors.gray3};
  font-size: ${(props) => props.theme.fontSizes.xsm};
  display: flex;
  justify-content: space-between;
`;
