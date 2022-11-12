import instance from "./api";

/* 메인페이지 Get */
export const getMain = async () => {
  const getData = await instance.get("/");
  return console.log("getData", getData);
};
