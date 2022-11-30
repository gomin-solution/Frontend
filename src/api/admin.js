import { instance } from "./api";

/* 관리자 권한 설정 */
export const setAdmin = async (userKey) => {
  await instance.put(`/manager/appoint`, { targetUser: userKey });
};
