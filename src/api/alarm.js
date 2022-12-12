import { instance } from "./api";

/* 알림 내역 get */
export const getAlarms = async () => {
  const res = await instance.get(`/push`);
  return res;
};

/* 알림 내역 delete */
export const removeAlarm = async (payload) => {
  console.log(payload);
  await instance.delete("/push", { alarm: payload });
};
