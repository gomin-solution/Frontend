import instance from "./api";

/* 답해주기 상세페이지 정보 get*/
export const adviceDetail = async (adviceId, filterId) => {
  const res = await instance.get(`/advice/${adviceId}/${filterId}`);
  return res;
};

// /* 답해주기 게시글 삭제 시 delete */
export const adviceDelete = async (payload) => {
  const res = await instance.delete(`/advice/${payload}`);
  return res;
};

/* 답해주기 게시글 수정 시 put */
export const adviceEdit = async (payload) => {
  const res = await instance.put(`/advice/${payload.adviceId}`, payload.advice);
  return res;
};

/* 답해주기 bookmark 선택 시 put */
export const adviceBookmark = async (payload) => {
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
export const commenEdit = async (payload) => {
  const res = await instance.put(
    `/advice/comment/${payload.commentId}`,
    payload.comment
  );
  return res;
};

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
