import { instance } from "./api";

/* 알림 내역 get */
export const getAlarms = async () => {
  const res = await instance.get(`/alarm`);
  return res;
};

/* 알림 삭제 */
export const removeAlarm = async (alarmId) => {
  const res = await instance.delete(`/alarm/${alarmId}`);
  return res;
};
