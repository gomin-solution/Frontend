import instance from "./api";

/* 프로필 정보 get*/
export const settingInfo = async (adviceId, filterId) => {
  const res = await instance.get(`/advice/${adviceId}/${filterId}`);
  return res;
};
