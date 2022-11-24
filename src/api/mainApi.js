import instance from "./api";

/* 메인페이지 get */
export const getMain = async () => {
  const res = await instance.get("/");
  return res;
};

/* 행운메시지 get */
export const putIsOpen = async () => {
  const res = await instance.put("/msg");
  return res;
};
