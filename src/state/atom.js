import { atom } from "recoil";

/* 알림 메시지 저장 */
export const alarmsAtom = atom({
  key: "alarms",
  default: "",
});

export const accessTokenAtom = atom({
  key: "accessTokenAtom",
  default: false,
});

export const userKeyAtom = atom({
  key: "userKeyAtom",
  default: 0,
});

/* 예시 */
// export const boardAdvices = atom({
//   key: "boardAdvices",
//   default: [],
// });
