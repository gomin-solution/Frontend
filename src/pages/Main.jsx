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
import { useRecoilValue } from "recoil";
import { userKeyAtom } from "../state/atom";
import Loading from "../components/Loading";
import { useCallback, useEffect, useState } from "react";
import { instance } from "../api/api";
import Alarm from "./Alarm";

function Main() {
  /* 메인페이지 get */
  const { data, isLoading } = useQuery("getMain", getMain, {
    retry: 3,
    refetchOnWindowFocus: false,
  });

  /* props 전달 */
  const recommend = data?.data.mainpage.advice;
  const totalCount = data?.data.mainpage.totalCount;
  const dailyMessage = data?.data.dailyMessage;
  const isOpen = data?.data.mainpage.isOpen;

  /* userKey 불러오기 */
  const userKey = useRecoilValue(userKeyAtom, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  /* 알림 버튼 클릭 시 모달 띄우기 */
  const [open, setOpen] = useState(false);

  /* 로그인 유저가 알림 허용 시, deviceToken 전달 */
  const deviceToken = sessionStorage.getItem("deviceToken");
  const postDeviceToken = useCallback(async () => {
    if (userKey && deviceToken) {
      try {
        instance.post("/push", { deviceToken });
      } catch (error) {
        console.log(error.response.data.errMsg);
      }
    }
  }, [userKey, deviceToken]);

  useEffect(() => {
    postDeviceToken();
  }, [postDeviceToken]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {userKey ? (
        <Header3 title={"메인페이지"} setOpen={setOpen} />
      ) : (
        <Header6 title={"메인페이지"} />
      )}
      <StContainer>
        {open ? <Alarm setOpen={setOpen} /> : null}
        <Banner />
        <StPaddingWrap>
          <Recommend recommend={recommend} />
          <StHr />
          <DailyMessage
            dailyMessage={dailyMessage}
            isOpen={isOpen}
            userKey={userKey}
            isLoading={isLoading}
          />
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
  margin-top: 4rem;
  height: calc(100vh - 8rem);
  margin-top: 4rem;
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
