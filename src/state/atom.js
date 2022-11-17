import { atom } from "recoil";

export const searchResult = atom({
  key: "searchRusult",
  default: {},
});

console.log(searchResult);

/* 예시 */
// export const boardAdvices = atom({
//   key: "boardAdvices",
//   default: [],
// });
