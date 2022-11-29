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
      <StTitleWrap>
        <StCategory>[{advice.category}]</StCategory>&nbsp;
        <StTitle>{advice.title}</StTitle>
      </StTitleWrap>
      <StContent>{advice.content}</StContent>
      <StWrap>
        <StTitleWrap style={{ fontSize: "0.875rem" }}>
          <span>조회 {advice.viewCount}&nbsp;&nbsp;</span>
          <span>조언 {advice.commentCount}</span>
        </StTitleWrap>
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
  margin-bottom: ${(props) => props.theme.margins.xsm};
  padding: ${(props) => props.theme.paddings.sm};

  p {
    text-overflow: ellipsis; // 말줄임 적용
    white-space: nowrap; // 문장이 길어지면 다음 줄로 넘기는 것을 없앰
    overflow: hidden;
  }
`;

const StTitleWrap = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
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
`;

const StWrap = styled.div`
  color: ${(props) => props.theme.Colors.gray3};
  font-size: ${(props) => props.theme.fontSizes.xsm};
  display: flex;
  justify-content: space-between;
`;
