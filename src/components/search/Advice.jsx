import React from "react";
import styled from "styled-components";
import AdviceList from "../AdviceList";

const Advice = ({ advices, keyword }) => {
  return (
    <StContainer>
      <StListWrap>
        {advices?.length > 0 ? (
          <StResult>{keyword}에 대한 검색 결과입니다.</StResult>
        ) : (
          <StResult>{keyword}에 대한 검색 결과가 없습니다.</StResult>
        )}
        {advices?.map((advice) => (
          <AdviceList advice={advice} key={advice.adviceId} />
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
