import React from "react";
import styled from "styled-components";
import ChoiceList from "../ChoiceList";
import myPost from "../../image/empty/myPost.jpg";

const Choice = ({ choices }) => {
  return (
    <StContainer>
      {choices?.length > 0 ? (
        <StResult>내가 작성한 골라주기 목록입니다.</StResult>
      ) : (
        <StImg src={myPost} alt="emptyChoice" />
      )}
      {choices?.map((choice) => {
        return (
          <ChoiceList
            choice={choice}
            key={choice.choiceId}
            getMutation="getMyPost"
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
