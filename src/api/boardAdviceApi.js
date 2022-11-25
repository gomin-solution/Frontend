import { useInfiniteQuery } from "react-query";
import instance from "./api";

/* advice infinite scroll get */
export const useAdviceInfiniteScroll = (categoryId, filterId) => {
  const getAdviceScroll = async ({ pageParam = 0 }) => {
    const { data } = await instance.get(
      `/advice/category/${categoryId}/${filterId}?page=${pageParam}`
    );
    return {
      // 실제 데이터
      advices: data.allAdvice,
      // 반환 값에 현재 페이지를
      currentPage: pageParam,
    };
  };
  // console.log("advices", advices);

  const {
    data: getAdvice,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(
    ["getAdviceScroll", categoryId, filterId],
    getAdviceScroll,
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.advices[0] ? lastPage.currentPage + 1 : undefined;
      },
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  return { getAdvice, fetchNextPage, isSuccess, hasNextPage, refetch };
};
