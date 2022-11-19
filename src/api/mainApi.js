import instance from "./api";

/* 메인페이지 get */
export const getMain = async () => {
  const res = await instance.get("/");
  return res;
};

/* 행운메시지 get */
export const getNote = async (userKey) => {
  console.log("여기", userKey);
  const res = await instance.get(`/note/${userKey}`);
  return res;
};
