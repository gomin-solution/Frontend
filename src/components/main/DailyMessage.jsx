import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { decodeCookie } from "../../api/cookie";
import { getNote } from "../../api/mainApi";
import { Alert4 } from "../../elements/Alert";

const DailyMessage = ({ isCookie }) => {
  /* userKey추출 */
  // const userKey = decodeCookie("accessToken").userKey;
  // console.log("userKey", userKey);

  /* 행운 메시지 get */
  // const { data } = useQuery(["getNote", userKey], () => getNote(userKey));
  // console.log("행운메시지", data);

  /* 로그인한 유저만 행운메시지 get */
  const noteHandler = () => {
    if (isCookie) {
      console.log("쿠키 있음");
    } else {
      Alert4("로그인 후 이용해주세요!");
    }
  };

  return (
    <StContainer>
      <StTitle>영국에서 온 편지</StTitle>
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
  height: 100% - 4rem;
  margin-bottom: ${(props) => props.theme.margins.sm};
`;

const StTitle = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;
