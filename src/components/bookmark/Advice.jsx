import React from "react";
import styled from "styled-components";
import AdviceList from "../AdviceList";
import bookmark from "../../image/empty/bookmark.jpg";

const Advice = ({ advices }) => {
  return (
    <StContainer>
      <StListWrap>
        {advices?.length > 0 ? (
          <StResult>북마크한 답해주기 목록입니다.</StResult>
        ) : (
          <StImg src={bookmark} alt="emptyChoice" />
        )}
        {advices?.map((advice) => (
          <AdviceList advice={advice} key={advice.adviceId} navi="/bookmark" />
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

const StImg = styled.img`
  width: 100%;
`;
