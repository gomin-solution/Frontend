import instance from "./api";

/* 메인페이지 Get */
export const getMain = async () => {
  const res = await instance.get("/");
  return res;
};

export const postChoice = async (payload) => {
  const res = await instance.post("/choice/${choiceId}", payload);
  return res;
};
