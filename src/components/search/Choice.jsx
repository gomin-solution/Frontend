import React from "react";
import styled from "styled-components";
import ChoiceList from "../ChoiceList";

const Choice = ({ choices, keyword }) => {
  return (
    <StContainer>
      {choices?.length > 0 ? (
        <StResult>{keyword}에 대한 검색 결과입니다.</StResult>
      ) : (
        <StResult>{keyword}에 대한 검색 결과가 없습니다.</StResult>
      )}
      {choices?.map((choice) => {
        return (
          <ChoiceList
            choice={choice}
            key={choice.choiceId}
            getMutation="getSearch"
          />
        );
      })}
    </StContainer>
  );
};

export default Choice;

const StContainer = styled.div`
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;

const StResult = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.theme.margins.base};
`;
