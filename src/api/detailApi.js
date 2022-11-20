import instance from "./api";

/* 답해주기 상세페이지 정보 get*/
export const detail = async (payload) => {
  const res = await instance.get(`/advice/${payload}`);
  return res;
};

// /* 답해주기 게시글 삭제 시 delete */
// export const deleteAdvice = async (payload) => {
//   const res = await instance.put(`bookmark/advice/${payload}`);
//   return res;
// };

/* 답해주기 게시글 수정 시 put */
export const editAdvice = async (payload) => {
  const res = await instance.put(`/advice/${payload}`, payload);
  return res;
};

/* 답해주기 bookmark 선택 시 put */
export const adBookmark = async (payload) => {
  const res = await instance.put(`bookmark/advice/${payload}`);
  return res;
};

////////////댓글/////////////////

/* 답해주기 댓글 생성 시 post */
export const commentAdvice = async (payload) => {
  const res = await instance.post(
    `/advice/comment/${payload.adviceId}`,
    payload.comment
  );
  return res;
};

/* 답해주기 댓글 수정 시 put */

/* 답해주기 댓글 삭제 시 delete */
export const commentDelete = async (payload) => {
  const res = await instance.delete(`/advice/comment/${payload}`);
  return res;
};

/* 답해주기 댓글 좋아요 시 put */
export const commentLike = async (payload) => {
  const res = await instance.put(`/advice/comment/like/${payload}`);
  return res;
};
