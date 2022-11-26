import React from "react";
import styled from "styled-components";
import ChoiceList from "../ChoiceList";

const Choice = ({ choices }) => {
  return (
    <StContainer>
      {choices?.length > 0 ? (
        <StResult>북마크한 골라주기 목록입니다.</StResult>
      ) : (
        <StResult>북마크한 골라주기가 없습니다.</StResult>
      )}
      {choices?.map((choice) => {
        return (
          <ChoiceList
            choice={choice}
            key={choice.choiceId}
            getMutation="getBookmark"
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
