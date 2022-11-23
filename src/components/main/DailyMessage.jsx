import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getNote } from "../../api/mainApi";
import { Alert4 } from "../../elements/Alert";

const DailyMessage = ({ isCookie }) => {
  /* 행운 메시지 get */
  const { data } = useQuery("getNote", getNote, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  /* 로그인한 유저만 행운메시지 get */
  const noteHandler = () => {
    if (isCookie) {
      Alert4(`${data?.data.dailyMessage}`);
    } else {
      Alert4("로그인 후 이용해주세요!");
    }
  };

  return (
    <StContainer>
      <StTitle>오늘의 행운 편지</StTitle>
      <img
        style={{ width: "100%", height: "95%", cursor: "pointer" }}
        src="./envelop.gif"
        alt="DailyMessage"
        onClick={noteHandler}
      />
    </StContainer>
  );
};

export default DailyMessage;

const StContainer = styled.div`
  width: 100%;
  height: 16rem;
  margin-bottom: ${(props) => props.theme.margins.sm};
`;

const StTitle = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;
