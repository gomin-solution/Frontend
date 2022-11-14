import instance from "./api";

/* 메인페이지 Get */
export const getMain = async () => {
  const res = await instance.get("/");
  return res;
};

export const postChoice = async (payload) => {
  const res = await instance.put(`/choice/${payload.choiceId}`, payload);
  return res;
};

export const bookmark = async (payload) => {
  const res = await instance.put(
    `bookmark/choice/${payload.choiceId}`,
    payload
  );
  return res;
};
