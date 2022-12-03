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

/* 회원탈퇴 put*/
export const goodBye = async () => {
  await instance.put("/bye");
};

/*-----------------개인정보 변경------------------- */

/* 닉네임 변경 put*/
export const nicknameChange = async (payload) => {
  await instance.put("/nickname", payload);
};

/* 비밀번호 put*/
export const passwordChange = async (payload) => {
  await instance.put("/password", payload);
};
