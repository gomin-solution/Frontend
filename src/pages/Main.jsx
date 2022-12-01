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
import { useEffect } from "react";
import { socket } from "../api/socketio";
import jwt_decode from "jwt-decode";
import { useRecoilState, useSetRecoilState } from "recoil";
import { accessTokenAtom, userKeyAtom } from "../state/atom";

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

  /* 쿠키 get & decode userKey */
  const [isCookie, setIsCookie] = useRecoilState(accessTokenAtom);
  const accToken = document.cookie.split("accessToken=")[1].split(";")[0];
  const { userKey } = jwt_decode(accToken);
  const setKey = useSetRecoilState(userKeyAtom);

  /* 최초 렌더링 시 서버로 userKey 전달 */
  useEffect(() => {
    socket.emit("main_connect", userKey);
    setKey(userKey);
  }, [userKey]);

  useEffect(() => {
    setIsCookie(true);
  }, [accToken]);

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
          <DailyMessage dailyMessage={dailyMessage} isOpen={isOpen} />
          <AnswerAndBookmark />
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
