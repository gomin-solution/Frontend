import { atom } from "recoil";

export const choiceState = atom({
  key: "choices",
  default: [],
});

export const adviceState = atom({
  key: "advices",
  default: [],
});

/* 예시 */
// export const counting = atom({
//   key: "counting",
//   default: 0,
// });
