import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// MUI Icon
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { bookmark, postChoice } from "../../api/boardChoiceApi";
import { useChoiceInfiniteScroll } from "../../api/boardChoiceApi";
import { MenuDial0, MenuDial1 } from "../../elements/MenuDial";
import { decodeCookie } from "../../api/cookie";

const Choice = () => {
  const queryClient = useQueryClient();

  /* 마감시간 */
  const dayjs = require("dayjs");
  const timezone = require("dayjs/plugin/timezone");
  const utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  /* filterId params 전달 */
  const [filterId, setFilterId] = useState(0);

  /* 유저키 가져오기 */
  const decodeKey = decodeCookie("accessToken")?.userKey;

  /* 투표 get initeScroll */
  const { getChoice, fetchNextPage, isSuccess, hasNextPage } =
    useChoiceInfiniteScroll(filterId);
  /* 사용자가 div 요소를 보면 inView가 true, 안보면 false로 자동으로 변경 */
  const { ref, inView } = useInView();

  /* 골라주기 선택 시 put */
  const choiceSubmit = async (e, choice) => {
    e.preventDefault();
    choiceMutation.mutate({
      choiceNum: e.target.value,
      choiceId: choice.choiceId,
    });
  };

  /* 골라주기 mutation */
  const choiceMutation = useMutation(postChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries("getChoiceScroll");
    },
  });

  /* 북마크 선택 시 put */
  const bookmarkChange = (choiceId) => {
    bookmarkMutation.mutate(choiceId);
  };

  /* 북마크 mutation */
  const bookmarkMutation = useMutation(bookmark, {
    onSuccess: () => {
      queryClient.invalidateQueries("getChoiceScroll");
    },
  });

  /* useEffect를 사용하여 마지막 항목을 바라볼 때 다음 페이지 데이터 요청하기 */
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <StContainer>
      <StNavWrap>
        <MenuDial0 setFilterId={setFilterId} />
      </StNavWrap>
      {isSuccess && getChoice?.pages
        ? getChoice?.pages.map((page) => (
            <React.Fragment key={page.currentPage}>
              {page?.choices.map((choice) => {
                /* 마감시간 비교를 위한 변수 설정 */
                const nowTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
                const newEndTime = dayjs(choice.endTime).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
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
                  <StWrap ref={ref} key={choice.choiceId} isEnd={choice.isEnd}>
                    <StChoiceTextWrap>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Stimg src={choice.userImage} alt="profile" />
                        <span>{choice.nickname}</span>
                      </div>
                      <StIconWrap>
                        {!choice?.isBookMark ? (
                          <BookmarkBorderIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => bookmarkChange(choice.choiceId)}
                          />
                        ) : (
                          <BookmarkIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => bookmarkChange(choice.choiceId)}
                          />
                        )}
                        {decodeKey === choice.userKey ? (
                          <MenuDial1 choiceId={choice.choiceId} />
                        ) : null}
                      </StIconWrap>
                    </StChoiceTextWrap>
                    <StChoiceName>{choice.title}</StChoiceName>
                    <StTextWrap2>
                      {choice.choiceCount === null ? (
                        <StParticipant>0명 참여</StParticipant>
                      ) : (
                        <StParticipant>
                          {choice.choiceCount}명 참여
                        </StParticipant>
                      )}
                      <StParticipant>
                        {newEndTime > nowTime ? (
                          <span>{diffTime} 후 마감</span>
                        ) : (
                          <span style={{ color: "white" }}>투표 마감</span>
                        )}
                      </StParticipant>
                    </StTextWrap2>
                    <StTextWrap3>
                      <span>{choice.choice1Name}</span>
                      <span>{choice.choice2Name}</span>
                    </StTextWrap3>
                    {!choice.isChoice ? (
                      <StChoiceWrap>
                        <StChoiceBtn
                          onClick={(e) => choiceSubmit(e, choice)}
                          value="1"
                          backColor="#9F9F9F"
                          isEnd={choice.isEnd}
                        >
                          1번
                        </StChoiceBtn>
                        <StChoiceBtn
                          onClick={(e) => choiceSubmit(e, choice)}
                          value="2"
                          backColor="#6D6D6D"
                          isEnd={choice.isEnd}
                        >
                          2번
                        </StChoiceBtn>
                      </StChoiceWrap>
                    ) : (
                      <StChoiceWrap isEnd={choice.isEnd}>
                        <StChoice1 width={choice.choice1Per}>
                          <StPerText1>{choice.choice1Per}%</StPerText1>
                        </StChoice1>
                        <StChoice2 width={choice.choice2Per}>
                          <StPerText2>{choice.choice2Per}%</StPerText2>
                        </StChoice2>
                      </StChoiceWrap>
                    )}
                  </StWrap>
                );
              })}
            </React.Fragment>
          ))
        : null}
    </StContainer>
  );
};

export default Choice;

const StContainer = styled.div`
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;

const StNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StWrap = styled.div`
  /* background-color: ${(props) => props.theme.boxColors.gray1}; */
  background-color: ${(props) =>
    props.isEnd ? "lightgray" : props.theme.boxColors.gray1};
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
  color: ${(props) => props.theme.fontColors.fong1};
`;

const StTextWrap3 = styled.div`
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
  font-weight: ${(props) => props.theme.fontWeights.lg};
  margin-bottom: 0.5rem;
`;

const Stimg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: ${(props) => props.theme.margins.xxsm};
`;

const StIconWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StChoiceWrap = styled.div`
  width: 100%;
  display: ${(props) => (props.isEnd ? "none" : "flex")};
`;

const StChoiceBtn = styled.button`
  width: 100%;
  height: 2rem;
  background-color: ${(props) => props.backColor};
  color: white;
  font-weight: ${(props) => props.theme.fontWeights.lg};
  border: none;
  display: ${(props) => (props.isEnd ? "none" : null)};
  cursor: pointer;
`;

const StChoice1 = styled.div`
  background-color: rgb(255, 206, 206);
  width: ${(props) => props.width}%;
  height: 2rem;
  text-align: left;
  display: flex;
  align-items: center;
  position: relative;
`;

const StChoice2 = styled.div`
  background-color: #c2c2ff;
  width: ${(props) => props.width}%;
  height: 2rem;
  text-align: right;
  display: flex;
  align-items: center;
  position: relative;
`;

const StPerText1 = styled.span`
  padding: ${(props) => props.theme.paddings.xsm};
  position: absolute;
  left: 0;
  z-index: 99;
`;

const StPerText2 = styled.span`
  padding: ${(props) => props.theme.paddings.xsm};
  position: absolute;
  right: 0;
  z-index: 99;
`;
