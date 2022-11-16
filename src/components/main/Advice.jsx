import React from "react";
import styled from "styled-components";

const Advice = ({ advice }) => {
  return (
    <StContainer>
      <StListWrap>
        <StAdviceList>
          <p style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
            {advice.title}
          </p>
          <StContent>{advice.content}</StContent>
          <StWrap>
            <div style={{ fontSize: "14px" }}>
              <span style={{ marginRight: "12px" }}>{advice.viewCount}</span>
              <span>{advice.CommentCount}</span>
            </div>
            <span>{advice.createdAt.slice(0, 10)}</span>
          </StWrap>
        </StAdviceList>
      </StListWrap>
    </StContainer>
  );
};

export default Advice;

const StContainer = styled.div`
  margin-bottom: ${(props) => props.theme.paddings.sm};
  padding: 0rem 1.5rem;
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
