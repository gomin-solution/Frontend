// import { instance } from "./api";
import { instance } from "./api";

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
  const res = await instance.put(
    `/advice/${payload.adviceId}`,
    payload.formData
  );
  return res;
};

/* 답해주기 bookmark 선택 시 put */
export const adviceBookmark = async (payload) => {
  const res = await instance.put(`bookmark/advice/${payload}`);
  return res;
};

/* ----------------------댓글---------------------- */

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

/* ----------------------쪽지---------------------- */
export const messageNav = async (payload) => {
  const res = await instance.post(`/rooms`, payload);
  return (window.location.href = `/rooms/${res?.data.roomId}`);
};

/* ----------------------채택하기---------------------- */

export const commentPick = async (payload) => {
  console.log(payload);
  // const res = await instance.put(`avice/comment/select/${payload}`);
  // return res;
};
