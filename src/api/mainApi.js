import instance from "./api";

/* 메인페이지 get */
export const getMain = async () => {
  const res = await instance.get("/");
  return res;
};

/* 행운메시지 get */
export const getNote = async () => {
  const res = await instance.get("/msg");
  return res;
};
