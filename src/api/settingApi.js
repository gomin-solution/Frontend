import { instance } from "./api";

/* 프로필 정보 get*/
export const getMyPage = async () => {
  const res = await instance.get("/setting");
  return res;
};

/* 로그아웃 get*/
export const logout = async () => {
  await instance.delete("/logout");
};
