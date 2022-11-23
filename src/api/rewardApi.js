import instance from "./api";

/*리워드 get*/
export const rewardGet = async () => {
  const res = await instance.get(`/reword`);
  return res;
};
