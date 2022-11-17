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
  } = useInfiniteQuery(["getChoiceScroll"], getChoiceScroll, {
    getNextPageParam: (lastPage, pages) =>
      lastPage.choices[0] ? lastPage.currentPage + 1 : undefined,
  });
  return { getChoice, fetchNextPage, isSuccess, hasNextPage };
};

/* advice infinite scroll get */
export const useAdviceInfiniteScroll = () => {
  const getAdviceScroll = async ({ pageParam = 0 }) => {
    const { data } = await instance.get(`/advice/category/0?page=${pageParam}`);
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
  const res = await instance.put(`/choice/${payload.choiceId}`, payload);
  return res;
};

/* bookmark 선택 시 put */
export const bookmark = async (payload) => {
  const res = await instance.put(
    `bookmark/choice/${payload.choiceId}`,
    payload
  );
  return res;
};
