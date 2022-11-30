import { instance } from "./api";

/* 알림 내역 get */
export const getAlarms = async () => {
  const res = await instance.get(`/alarm`);
  return res;
};
