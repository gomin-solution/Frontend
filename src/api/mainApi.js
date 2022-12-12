// import { instance } from "./api";
import { instance } from "./api";

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

/* 북마크 get */
export const getBookmark = async () => {
  const res = await instance.get("/bookmark");
  return res;
};

/*내 작성글 get */
export const getMyPost = async () => {
  const res = await instance.get("/mypost");
  return res.data;
};
