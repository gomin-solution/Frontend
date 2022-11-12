import React from "react";
import styled from "styled-components";

const AdviceList = () => {
  return (
    <StAdviceList>
      <p style={{ marginBottom: "6px", fontWeight: "600" }}>제목</p>
      <StContent>
        내용은 말줄임표 두 줄로 적용 내용은 말줄임표 두 줄로 적용 내용은
        말줄임표 두 줄로 적용 내용은 말줄임표 두 줄로 적용 내용은 말줄임표 두
        줄로 적용
      </StContent>
      <div
        style={{
          color: "#999999",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: "14px" }}>
          <span style={{ marginRight: "12px" }}>조회 300</span>
          <span>조언 10</span>
        </div>
        <span>2022. 11. 12.</span>
      </div>
    </StAdviceList>
  );
};

export default AdviceList;

const StAdviceList = styled.div`
  background-color: #f6f6f6;
  height: 96px;
  margin-bottom: 8px;
  padding: 12px;
`;

const StContent = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-bottom: 12px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
