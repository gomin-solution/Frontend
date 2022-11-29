import { instance } from "./api";

/* 신고 post */
export const reportPost = async (adviceId) => {
  await instance.post(`report/${adviceId}`, payload);
};
