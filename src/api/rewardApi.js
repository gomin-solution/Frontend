import instance from "./api";

/*리워드 정보 get*/
export const rewardGet = async () => {
  const res = await instance.get(`/reword`);
  return res;
};

/*리워드 받기 put*/
export const rewardNew = async (payload) => {
  const res = await instance.put(`/reword/${payload}`);
  return res;
};
