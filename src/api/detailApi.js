// import { instance } from "./api";
import { instance } from "./api";

/* 답해주기 상세페이지 정보 get*/
export const adviceDetail = async (adviceId, filterId) => {
  const res = await instance.get(`/advice/${adviceId}/${filterId}`);
  return res;
};

// /* 답해주기 게시글 삭제 시 delete */
export const adviceDelete = async (payload) => {
  await instance.delete(`/advice/${payload}`);
};

/* 답해주기 게시글 수정 시 put */
export const adviceEdit = async (payload) => {
  await instance.put(`/advice/${payload.adviceId}`, payload.formData);
};

/* 답해주기 bookmark 선택 시 put */
export const adviceBookmark = async (payload) => {
  await instance.put(`bookmark/advice/${payload}`);
};

/* ----------------------댓글---------------------- */

/* 답해주기 댓글 생성 시 post */
export const commentAdvice = async (payload) => {
  await instance.post(`/advice/comment/${payload.adviceId}`, payload.comment);
};

/* 답해주기 댓글 수정 시 put */
export const commenEdit = async (payload) => {
  await instance.put(`/advice/comment/${payload.commentId}`, payload.comment);
};

/* 답해주기 댓글 삭제 시 delete */
export const commentDelete = async (payload) => {
  await instance.delete(`/advice/comment/${payload}`);
};

/* 답해주기 댓글 좋아요 시 put */
export const commentLike = async (payload) => {
  await instance.put(`/advice/comment/like/${payload}`);
};

/* 쪽지하기 */
export const messageNav = async (payload) => {
  await instance.post(`/rooms`, payload);
};

/* 신고하기 */
export const reportPost = async (payload) => {
  console.log(payload);
  await instance.post(`/report/${payload.params}`, {
    targetName: payload.targetName,
    why: payload.why,
  });
};

/* ----------------------채택하기---------------------- */

export const commentPick = async (payload) => {
  await instance.put(`advice/comment/select/${payload}`);
};

/* ----------------------채택하기---------------------- */

/* 답해주기 대댓글 정보 get*/
export const recommentGet = async (commentId) => {
  const res = await instance.get(`/advice/comment/re/${commentId}`);
  return res;
};

/* 답해주기 대댓글 생성 시 post */
export const recommentPost = async (payload) => {
  await instance.post(
    `/advice/comment/re/${payload.commentId}`,
    payload.comment
  );
};

/* 답해주기 대댓글 수정 시 put */
export const recommentEdit = async (payload) => {
  await instance.put(`/advice/comment/re/${payload.id}`, payload.comment);
};

/* 답해주기 대댓글 삭제 시 delete */
export const recommentDelete = async (payload) => {
  await instance.delete(`/advice/comment/re/${payload}`);
};
