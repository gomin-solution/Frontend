import { useInfiniteQuery } from "react-query";
import instance from "./api";

/* choice infinite scroll 전부 get */
export const useChoiceInfiniteScroll = () => {
  const getChoiceScroll = async ({ pageParam = 0 }) => {
    const res = await instance.get(`/choice?page=${pageParam}`);
    // console.log("res", res);
    return {
      // 실제 데이터
      choices: res.data.choice,
      // 반환 값에 현재 페이지를
      currentPage: pageParam,
      // choice 배열의 길이 값을 구하여 0일땐 undefined 처리
      choiceLength: res.data.choice.length,
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

/* choice infinite scroll 전부 get */
export const useAdviceInfiniteScroll = () => {
  const getAdviceScroll = async ({ pageParam = 0, categoryId }) => {
    const res = await instance.get(`/advice/${categoryId}?page=${pageParam}`);
    // console.log("res", res);
    return {
      // 실제 데이터
      choices: res.data.choice,
      // 반환 값에 현재 페이지를
      currentPage: pageParam,
      // choice 배열의 길이 값을 구하여 0일땐 undefined 처리
      choiceLength: res.data.choice.length,
    };
  };
  const {
    data: getAdvice,
    fetchNextPage,
    isSuccess,
    hasNextPage,
  } = useInfiniteQuery(["getAdviceScroll"], getAdviceScroll, {
    getNextPageParam: (lastPage, pages) =>
      lastPage.choices[0] ? lastPage.currentPage + 1 : undefined,
  });
  return { getAdvice, fetchNextPage, isSuccess, hasNextPage };
};
