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
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getCookie } from "../api/cookie";

function Main() {
  /* 메인페이지 get */
  const { data, isLoading } = useQuery("getMain", getMain, {
    refetchOnWindowFocus: false,
  });
  console.log("data", data);

  const recommend = data?.data.mainpage.advice;
  const totalCount = data?.data.mainpage.totalCount;
  const dailyMessage = data?.data.dailyMessage;
  const isOpen = data?.data.mainpage.isOpen;

  if (isLoading) {
    return (
      <StLoading>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
        <span>고민 접는 중</span>
      </StLoading>
    );
  }

  /* accessToken get */
  const isCookie = getCookie("accessToken");

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
  width: 100%;
  position: absolute;
  height: calc(100vh - 8rem);
  overflow-y: scroll;
`;

const StPaddingWrap = styled.div`
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;

const StHr = styled.hr`
  height: 0.1rem;
  background-color: #dde1f9;
  margin-bottom: ${(props) => props.theme.paddings.xxl};
  border: none;
`;

const StLoading = styled.div`
  width: 100%;
  position: absolute;
  top: 40%;
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: 1rem;
`;
