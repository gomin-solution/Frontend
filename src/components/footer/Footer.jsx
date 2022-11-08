import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StContainer>
      <button>홈</button>
      <button>게시판</button>
      <button>채팅</button>
      <button>마이페이지</button>
    </StContainer>
  );
};

export default Footer;

const StContainer = styled.div`
  background-color: #fdffdc;
  margin: 0.5rem;
  column-gap: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
