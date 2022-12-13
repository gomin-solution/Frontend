import React from "react";
import styled from "styled-components";
import ChoiceList from "../ChoiceList";
import bookmark from "../../image/empty/bookmark.jpg";

const Choice = ({ choices, reGet }) => {
  return (
    <StContainer>
      {choices?.length > 0 ? (
        <StResult>북마크한 골라주기 목록입니다.</StResult>
      ) : (
        <StImg src={bookmark} alt="emptyChoice" />
      )}
      {choices?.map((choice) => {
        return (
          <ChoiceList
            choice={choice}
            key={choice.choiceId}
            getMutation="getBookmark"
            reGet={reGet}
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

const StImg = styled.img`
  width: 100%;
`;
