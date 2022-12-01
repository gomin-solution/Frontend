import { Header3 } from "../elements/Header";
import { Header6 } from "../elements/Header";
import Footer from "../elements/Footer";
import Banner from "../components/main/Banner";
import Recommend from "../components/main/Recommend";
import DailyMessage from "../components/main/DailyMessage";
import styled from "styled-components";
import AnswerAndBookmark from "../components/main/AnswerAndBookmark";
import TotalCount from "../components/main/TotalCount";
import { useQuery } from "react-query";
import { getMain } from "../api/mainApi";
import { Container } from "../shared/css";
import { decodeCookie, getCookie } from "../api/cookie";
import { useEffect } from "react";
import { socket } from "../api/socketio";

function Main() {
  /* 메인페이지 get */
  const { data } = useQuery("getMain", getMain, {
    refetchOnWindowFocus: false,
  });

  /* props 전달 */
  const recommend = data?.data.mainpage.advice;
  const totalCount = data?.data.mainpage.totalCount;
  const dailyMessage = data?.data.dailyMessage;
  const isOpen = data?.data.mainpage.isOpen;

  /* accessToken get */
  const isCookie = getCookie("accessToken");

  /* userKey get */
  const { userKey } = decodeCookie("accessToken");

  /* 최초 렌더링 시 서버로 userKey 전달 */
  useEffect(() => {
    socket.emit("main_connect", userKey);
  }, []);

  return (
    <>
      {isCookie ? (
        <Header3 title={"메인페이지"} />
      ) : (
        <Header6 title={"메인페이지"} />
      )}
      <StContainer>
        <Banner />
        <StPaddingWrap>
          <Recommend recommend={recommend} />
          <StHr />
          <DailyMessage
            isCookie={isCookie}
            dailyMessage={dailyMessage}
            isOpen={isOpen}
          />
          <AnswerAndBookmark isCookie={isCookie} />
          <TotalCount totalCount={totalCount} />
        </StPaddingWrap>
      </StContainer>
      <Footer title={"메인"} />
    </>
  );
}

export default Main;

const StContainer = styled.div`
  ${Container}
  height: calc(100vh - 8rem);
`;

const StPaddingWrap = styled.div`
  padding: ${(props) => props.theme.paddings.xxl};
`;

const StHr = styled.hr`
  height: 0.1rem;
  background-color: #cce8e8;
  margin-bottom: ${(props) => props.theme.paddings.xxl};
  border: none;
`;
