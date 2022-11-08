import React from "react";
import styled from "styled-components";

const Advice = () => {
  return (
    <>
      <span>더보기</span>
      <div>
        <div>
          <Stimg src="" alt="" />
          <span>닉네임</span>
          <span>날짜</span>
        </div>
      </div>
      <p>제목</p>
      <p>000명 참여중</p>
      <StContent>
        내용은 말줄임표 두 줄로 적용 내용은 말줄임표 두 줄로 적용 내용은
        말줄임표 두 줄로 적용 내용은 말줄임표 두 줄로 적용 내용은 말줄임표 두
        줄로 적용
      </StContent>
    </>
  );
};

export default Advice;

const Stimg = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
`;

const StContent = styled.p`
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
