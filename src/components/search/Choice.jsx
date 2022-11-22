import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";

// MUI Icon
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { bookmark, postChoice } from "../../api/boardChoiceApi";
import { MenuDial1 } from "../../elements/MenuDial";
import { decodeCookie } from "../../api/cookie";
import getSearch from "../../api/searchApi";
import { useLocation } from "react-router-dom";

const SearchChoice = () => {
  const queryClient = useQueryClient();

  const { state: search } = useLocation();
  console.log("search", search);

  const { data } = useQuery(["getSearch", search], () => getSearch(search));
  console.log(data);

  /* 마감시간 */
  const dayjs = require("dayjs");
  const timezone = require("dayjs/plugin/timezone");
  const utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  /* 유저키 가져오기 */
  const decodeKey = decodeCookie("accessToken")?.userKey;
  console.log(decodeKey);

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

  return (
    // <div>aaa</div>
    <StContainer>
      {data?.choice.map((choice) => {
        /* 마감시간 비교를 위한 변수 설정 */
        const nowTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
        const newEndTime = dayjs(choice.endTime).format("YYYY-MM-DD HH:mm:ss");
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
          <StWrap key={choice.choiceId}>
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
                <span
                  style={{
                    color: `${(props) => props.theme.fontColors.fong1}`,
                  }}
                >
                  0명 참여
                </span>
              ) : (
                <span
                  style={{
                    color: `${(props) => props.theme.fontColors.fong1}`,
                  }}
                >
                  {choice.choiceCount}명 참여
                </span>
              )}
              <span
                style={{
                  color: `${(props) => props.theme.fontColors.fong1}`,
                }}
              >
                {newEndTime > nowTime ? (
                  <span>{diffTime} 후 마감</span>
                ) : (
                  <span>투표 마감</span>
                )}
              </span>
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
                >
                  1번
                </StChoiceBtn>
                <StChoiceBtn
                  onClick={(e) => choiceSubmit(e, choice)}
                  value="2"
                  backColor="#6D6D6D"
                >
                  2번
                </StChoiceBtn>
              </StChoiceWrap>
            ) : (
              <StChoiceWrap>
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
    </StContainer>
  );
};

export default SearchChoice;

const StContainer = styled.div`
  padding: 0rem ${(props) => props.theme.paddings.xxl};
`;

const StWrap = styled.div`
  background-color: ${(props) => props.theme.boxColors.gray1};
  margin-bottom: ${(props) => props.theme.margins.xxl};
  padding: ${(props) => props.theme.paddings.lg};
`;

const StTextWrap2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
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
  display: flex;
`;

const StChoiceBtn = styled.button`
  width: 100%;
  height: 2rem;
  background-color: ${(props) => props.backColor};
  color: white;
  font-weight: ${(props) => props.theme.fontWeights.lg};
  border: none;
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
