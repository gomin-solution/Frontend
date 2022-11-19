import { useInfiniteQuery } from "react-query";
import instance from "./api";

/* choice infinite scroll et */
export const useChoiceInfiniteScroll = () => {
  const getChoiceScroll = async ({ pageParam = 0 }) => {
    const { data } = await instance.get(`/choice?page=${pageParam}`);
    return {
      // 실제 데이터
      choices: data.choice,
      // 반환 값에 현재 페이지를
      currentPage: pageParam,
    };
  };
  const {
    data: getChoice,
    fetchNextPage,
    isSuccess,
    hasNextPage,
  } = useInfiniteQuery(
    ["getChoiceScroll"],
    getChoiceScroll,
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage.choices[0] ? lastPage.currentPage + 1 : undefined,
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  return { getChoice, fetchNextPage, isSuccess, hasNextPage };
};

// useCallback으로 categoryId가 변경될 때마다getAdviceScroll 실행
/* advice infinite scroll get */
export const useAdviceInfiniteScroll = (categoryId) => {
  console.log("categoryId", categoryId);
  const getAdviceScroll = async ({ pageParam = 0 }) => {
    const { data } = await instance.get(
      `/advice/category/${categoryId}?page=${pageParam}`
    );
    return {
      // 실제 데이터
      advices: data.advice,
      // 반환 값에 현재 페이지를
      currentPage: pageParam,
    };
  };
  const {
    data: getAdvice,
    fetchNextPage,
    isSuccess,
    hasNextPage,
  } = useInfiniteQuery(["getAdviceScroll"], getAdviceScroll, {
    getNextPageParam: (lastPage, pages) =>
      lastPage.advices[0] ? lastPage.currentPage + 1 : undefined,
  });
  return { getAdvice, fetchNextPage, isSuccess, hasNextPage };
};

/* choice 선택 시 post */
export const postChoice = async (payload) => {
  const res = await instance.put(`/choice/${payload.choiceId}`, {
    choiceNum: +payload.choiceNum,
  });
  return res;
};

/* bookmark 선택 시 put */
export const bookmark = async (choiceId) => {
  console.log("choiceId", choiceId);
  const res = await instance.put(`bookmark/choice/${choiceId}`);
  return res;
};

/* 상세페이지 정보 get*/
export const detail = async (payload) => {
  const res = await instance.get(`/advice/${payload}`);
  return res;
};

/* 답해주기 bookmark 선택 시 put */
export const AdBookmark = async (payload) => {
  const res = await instance.put(`bookmark/advice/${payload}`);
  return res;
};
