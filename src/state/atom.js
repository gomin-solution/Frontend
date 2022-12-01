import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

/* 알림 메시지 저장 */
export const alarmsAtom = atom({
  key: "alarms",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userKeyAtom = atom({
  key: "userKeyAtom",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

/* 예시 */
// export const boardAdvices = atom({
//   key: "boardAdvices",
//   default: [],
// });
