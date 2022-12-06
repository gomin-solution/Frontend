import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
// MUI Icon
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { bookmark, postChoice } from "../api/boardChoiceApi";
import { VoteDial } from "../elements/MenuDial";
import { userKeyAtom } from "../state/atom";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { OkayAlert } from "../elements/Alert";

const ChoiceList = ({ newRef, choice, getMutation }) => {
  const queryClient = useQueryClient();

  /* 마감시간 */
  const dayjs = require("dayjs");
  const timezone = require("dayjs/plugin/timezone");
  const utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  /* 유저키 가져오기 */
  const userKey = useRecoilValue(userKeyAtom);

  let choice1Per;
  let choice2Per;

  if (choice.choice1 === 0 && choice.choice2 === 0) {
    choice1Per = 0;
    choice1Per = 0;
  } else if (choice.choice1 !== 0) {
    choice1Per = Math.round((choice.choice1 / choice.choiceCount) * 100);
    choice2Per = 100 - choice1Per;
  } else {
    choice2Per = Math.round((choice.choice2 / choice.choiceCount) * 100);
    choice1Per = 100 - choice2Per;
  }

  // /* 골라주기 % 변환 */
  const [choiceAPer, setChoiceAPer] = useState(choice1Per);
  const [choiceBPer, setChoiceBPer] = useState(choice2Per);

  /* 골라주기 mutation */
  const choiceMutation = useMutation(postChoice, {
    /* onMutate : mutation function이 시작되기 전에 작동 */
    onMutate: async ({ choiceNum }) => {
      if (!userKey) {
        OkayAlert("로그인 후 이용해주세요.");
      } else {
        /* 서버에 전송한 요청이 잘못되었을 경우를 대비해서 이전 데이터를 저장 */
        const prevPick = queryClient.getQueryData(getMutation);

        /* 혹시 발생할지도 모르는 refetch를 취소하여 Optimistic Update의 데이터를 덮어쓰지 않도록 예방 */
        await queryClient.cancelQueries(getMutation);

        /* 서버의 응답이 오기 전에 UI를 미리 업데이트 */
        queryClient.setQueryData(getMutation, () => {
          if (choiceNum === "1") {
            const choice1 = choice.choice1 + 1;
            setChoiceAPer(
              Math.round((choice1 / (choice.choiceCount + 1)) * 100)
            );
            setChoiceBPer(
              100 - Math.round((choice1 / (choice.choiceCount + 1)) * 100)
            );
          } else if (choiceNum === "2") {
            const choice2 = choice.choice2 + 1;
            setChoiceBPer(
              Math.round((choice2 / (choice.choiceCount + 1)) * 100)
            );
            setChoiceAPer(
              100 - Math.round((choice2 / (choice.choiceCount + 1)) * 100)
            );
          }
          return (choice.isChoice = !choice.isChoice);
        });

        /* 에러가 발생했을 경우 복원할 수 있도록 이전 데이터를 반환 */
        return { prevPick };
      }
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(getMutation, context.prevPick);
    },
    onSettled: () => {
      /* 관련 쿼리 refetch */
      queryClient.invalidateQueries(getMutation);
    },
  });

  /* 골라주기 선택 시 put */
  const choiceSubmit = async (e, choice) => {
    e.preventDefault();
    choiceMutation.mutate({
      choiceNum: e.target.value,
      choiceId: choice.choiceId,
    });
  };

  /* 북마크 mutation */
  const bookmarkMutation = useMutation(bookmark, {
    /* onMutate : mutation function이 시작되기 전에 작동 */
    onMutate: async () => {
      if (!userKey) {
        OkayAlert("로그인 후 이용해주세요.");
      } else {
        /* 서버에 전송한 요청이 잘못되었을 경우를 대비해서 이전 데이터를 저장 */
        const prevBookMark = queryClient.getQueryData(getMutation);

        /* 혹시 발생할지도 모르는 refetch를 취소하여 Optimistic Update의 데이터를 덮어쓰지 않도록 예방 */
        await queryClient.cancelQueries(getMutation);

        /* 서버의 응답이 오기 전에 UI를 미리 업데이트 */
        queryClient.setQueryData(
          getMutation,
          () => (choice.isBookMark = !choice.isBookMark)
        );

        /* 에러가 발생했을 경우 복원할 수 있도록 이전 데이터를 반환 */
        return { prevBookMark };
      }
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(getMutation, context.prevBookMark);
    },
    onSettled: () => {
      /* 관련 쿼리 refetch */
      queryClient.invalidateQueries(getMutation);
    },
  });

  /* 북마크 선택 시 put */
  const bookmarkChange = (choiceId) => {
    bookmarkMutation.mutate(choiceId);
  };

  /* 마감시간 비교를 위한 변수 설정 */
  const nowTime = dayjs().format("YYYY/MM/DD HH:mm:ss");
  const newEndTime = dayjs(choice.endTime).format("YYYY/MM/DD HH:mm:ss");
  const diffDayTime = dayjs(newEndTime).diff(nowTime, "day");
  const diffHourTime = dayjs(newEndTime).diff(nowTime, "hour");
  const diffMinTime = dayjs(newEndTime).diff(nowTime, "minute");
  let diffTime;
  if (diffDayTime >= 1) {
    diffTime = diffDayTime + "일";
  } else if (diffDayTime < 1 && 59 < diffMinTime) {
    diffTime = diffHourTime + "시간";
  } else {
    diffTime = diffMinTime + "분";
  }

  return (
    <StWrap ref={newRef} key={choice.choiceId} isEnd={choice.isEnd}>
      <StChoiceTextWrap>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Stimg src={choice.userImage} alt="profile" />
          <span style={{ color: "#526161" }}>{choice.nickname}</span>
        </div>
        <StIconWrap>
          {!choice?.isBookMark ? (
            <BookmarkBorderIcon
              style={{ cursor: "pointer" }}
              onClick={() => bookmarkChange(choice.choiceId, choice.isBookMark)}
            />
          ) : (
            <BookmarkIcon
              style={{ cursor: "pointer" }}
              onClick={() => bookmarkChange(choice.choiceId, choice.isBookMark)}
            />
          )}
          {userKey === choice.userKey ? (
            <VoteDial choiceId={choice.choiceId} getMutation={getMutation} />
          ) : null}
        </StIconWrap>
      </StChoiceTextWrap>
      <StChoiceName>{choice.title}</StChoiceName>
      <StTextWrap2>
        {choice.choiceCount === null ? (
          <StParticipant>0명 참여</StParticipant>
        ) : (
          <StParticipant>{choice.choiceCount}명 참여</StParticipant>
        )}
        <StParticipant>
          {!choice.isEnd ? (
            <span>{diffTime} 후 마감</span>
          ) : (
            <span style={{ color: "#BA1A1A", fontWeight: "700" }}>
              투표 마감
            </span>
          )}
        </StParticipant>
      </StTextWrap2>
      <StTextWrap3>
        <span>{choice.choice1Name}</span>
        <span>{choice.choice2Name}</span>
      </StTextWrap3>
      {choice.isChoice || choice.isEnd ? (
        <StChoiceWrap choiceCount={choice.choiceCount}>
          <StChoice1 width={choiceAPer} isChoice={choice.isChoice}></StChoice1>
          <StChoice2 width={choiceBPer}></StChoice2>
          <StPerText>
            <span>{choiceAPer}%</span>
            <span>{choiceBPer}%</span>
          </StPerText>
        </StChoiceWrap>
      ) : (
        <StChoiceWrap>
          <StChoiceBtn
            onClick={(e) => choiceSubmit(e, choice)}
            value="1"
            backColor="#9CD67E"
            isEnd={choice.isEnd}
          >
            선택
          </StChoiceBtn>
          <StChoiceBtn
            onClick={(e) => choiceSubmit(e, choice)}
            value="2"
            backColor="#A7EFF0"
            isEnd={choice.isEnd}
          >
            선택
          </StChoiceBtn>
        </StChoiceWrap>
      )}
    </StWrap>
  );
};

export default ChoiceList;

const StWrap = styled.div`
  background-color: ${(props) =>
    props.isEnd ? "#ffffff" : props.theme.Colors.blueGray1};
  filter: ${(props) => (props.isEnd ? "brightness(70%)" : "none")};
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding: ${(props) => props.theme.paddings.lg};
`;

const StTextWrap2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StParticipant = styled.span`
  color: #627c7c;
`;

const StTextWrap3 = styled.div`
  font-size: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.xxsm};
`;

const StChoiceTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.lg};
`;

const StChoiceName = styled.div`
  margin-bottom: 0.5rem;
`;

const Stimg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: ${(props) => props.theme.margins.xxsm};
`;

const StIconWrap = styled.div`
  color: ${(props) => props.theme.Colors.blueGreen3};
  display: flex;
  align-items: center;
`;

const StChoiceWrap = styled.div`
  width: 100%;
  display: ${(props) => (props.choiceCount === 0 ? "none" : "flex")};
  position: relative;
`;

const StChoiceBtn = styled.button`
  /* width: 100%; */
  height: 2rem;
  background-color: ${(props) => props.backColor};
`;

const StChoice1 = styled.div`
  background-color: #9cd67e;
  width: ${(props) => props.width}%;
  height: 2rem;
`;

const StChoice2 = styled.div`
  background-color: #a7eff0;
  width: ${(props) => props.width}%;
  height: 2rem;
`;

const StPerText = styled.div`
  font-size: 90%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.3rem;
  padding: 0 0.3rem;
`;
