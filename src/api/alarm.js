import { instance } from "./api";

/* 알림 내역 get */
export const getAlarms = async () => {
  const res = await instance.get(`/push`);
  return res;
};

/* 알림 내역 delete */
export const removeAlarm = async (idx) => {
  await instance.delete(`/push/${idx}`);
};
