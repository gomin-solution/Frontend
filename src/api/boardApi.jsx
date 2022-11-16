import { useInfiniteQuery } from "react-query";
import instance from "./api";

/* choice infinite scroll et */
export const useChoiceInfiniteScroll = () => {
  const getChoiceScroll = async ({ pageParam = 0 }) => {
    const res = await instance.get(`/choice?page=${pageParam}`);
    return {
      // 실제 데이터
      choices: res.data.choice,
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
export const useAdviceInfiniteScroll = (categoryId) => {
  const getAdviceScroll =
    (categoryId) =>
    async ({ pageParam = 0 }) => {
      console.log("categoryId", categoryId);
      const res = await instance.get(
        `/advice/category/${categoryId}?page=${pageParam}`
      );
      return {
        // 실제 데이터
        advices: res.data.advice,
        // 반환 값에 현재 페이지를
        currentPage: pageParam,
      };
    };
  const {
    data: getAdvice,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(["getAdviceScroll"], getAdviceScroll(categoryId), {
    getNextPageParam: (lastPage, pages) =>
      lastPage.advices[0] ? lastPage.currentPage + 1 : undefined,
  });
  return { getAdvice, fetchNextPage, isSuccess, hasNextPage, refetch };
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
