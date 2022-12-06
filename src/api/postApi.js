import { instance, postInstance } from "./api";

/*투표하기 게시글 작성 */
export const addChoice = async (payload) => {
  await instance.post(`/choice`, payload);
};

/*조언하기 게시글 작성 */
export const addAdvice = async (payload) => {
  const res = await postInstance.post(`/advice`, payload);
  return (window.location.href = `/board-advice/${res.data.adviceId}`);
};
