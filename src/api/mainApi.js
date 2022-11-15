import instance from "./api";

/* choice, advice 전부 get */
export const getAllData = async () => {
  const res = await instance.get("/");
  return res;
};

/* choice 선택 시 post */
export const postChoice = async (payload) => {
  const res = await instance.put(`/choice/${payload.choiceId}`, payload);
  return res;
};

/* bookmark 선택 시 put */
export const bookmark = async (payload) => {
  const res = await instance.put(
    `bookmark/choice/${payload.choiceId}`,
    payload
  );
  return res;
};
