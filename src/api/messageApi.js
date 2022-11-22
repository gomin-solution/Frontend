import instance from "./api";

/*투표하기 게시글 작성 */
export const getRoom = async () => {
  const res = await instance.get(`/note`);
  return res;
};
