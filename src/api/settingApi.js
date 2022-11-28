import { instance } from "./api";

/* 프로필 정보 get*/
export const getMyPage = async () => {
  const res = await instance.get("/mypage");
  return res;
};
