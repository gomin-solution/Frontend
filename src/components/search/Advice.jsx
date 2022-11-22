import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Advice = ({ advices, keyword }) => {
  const nav = useNavigate();
  console.log(advices);

  return (
    <StContainer>
      <StListWrap>
        {advices?.length > 0 ? (
          <StResult>{keyword}에 대한 검색 결과입니다.</StResult>
        ) : (
          <StResult>{keyword}에 대한 검색 결과가 없습니다.</StResult>
        )}
        {advices?.map((advice) => (
          <StAdviceList
            key={advice.adviceId}
            onClick={() => {
              nav(`/board-advice/${advice.adviceId}`);
            }}
          >
            <p
              style={{
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              {advice.categoryId}
              {advice.title}
            </p>
            <StContent>{advice.content}</StContent>
            <StWrap>
              <div style={{ fontSize: "0.875rem" }}>
                <span>조회수 {advice.viewCount}&nbsp;&nbsp;</span>
                <span>댓글수 {advice.commentCount}</span>
              </div>
              <span style={{ fontSize: "0.875rem" }}>
                {advice.createdAt.slice(0, 10)}
              </span>
            </StWrap>
          </StAdviceList>
        ))}
      </StListWrap>
    </StContainer>
  );
};

export default Advice;

const StContainer = styled.div`
  margin-bottom: ${(props) => props.theme.paddings.sm};
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;

const StResult = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.theme.margins.base};
`;

const StListWrap = styled.div`
  height: 100%;
`;

const StAdviceList = styled.div`
  background-color: #f6f6f6;
  height: 6rem;
  margin-bottom: ${(props) => props.theme.margins.xsm};
  padding: ${(props) => props.theme.paddings.sm};
`;

const StContent = styled.p`
  width: 100%;
  overflow: hidden;
  margin-top: ${(props) => props.theme.margins.sm};
  margin-bottom: ${(props) => props.theme.margins.xsm};
  text-overflow: ellipsis; // 말줄임 적용
  white-space: nowrap; // 문장이 길어지면 다음 줄로 넘기는 것을 없앰
  overflow: hidden;
`;

const StWrap = styled.div`
  color: #999999;
  display: flex;
  justify-content: space-between;
`;