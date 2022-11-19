import { atom } from "recoil";

export const searchResult = atom({
  key: "searchRusult",
  default: {},
});

export const decodeUser = atom({
  key: "decodeUser",
  default: 0,
});

/* 예시 */
// export const boardAdvices = atom({
//   key: "boardAdvices",
//   default: [],
// });
