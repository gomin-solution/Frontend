import { useInfiniteQuery } from "react-query";
import instance from "./api";

/* choice infinite scroll get */
export const useChoiceInfiniteScroll = (filterId) => {
  const getChoiceScroll = async ({ pageParam = 0 }) => {
    const { data } = await instance.get(
      `/choice/${filterId}?page=${pageParam}`
    );
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
    ["getChoiceScroll", filterId],
    getChoiceScroll,
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage.choices[0] ? lastPage.currentPage + 1 : undefined,
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
  return { getChoice, fetchNextPage, isSuccess, hasNextPage };
};

/* choice 선택 시 post */
export const postChoice = async (payload) => {
  const res = await instance.put(`/choice/${payload.choiceId}`, {
    choiceNum: +payload.choiceNum,
  });
  return res;
};

/* choice bookmark 선택 시 put */
export const bookmark = async (choiceId) => {
  const res = await instance.put(`bookmark/choice/${choiceId}`);
  return res;
};

/* choice 게시글 삭제 */
export const removeChoice = async (choiceId) => {
  const res = await instance.delete(`/choice/${choiceId}`);
  return res;
};

/* choice 게시글 마감 */
export const endChoice = async (choiceId) => {
  const res = await instance.put(`/choice/early/${choiceId}`);
  return res;
};
