import { atom } from "recoil";

/*수정하기 누를시 컴포넌트 변경 */
export const userEdit = atom({
  key: "userEdit",
  default: true,
});

export const searchAdvices = atom({
  key: "searchAdvices",
  default: "",
});

/* 예시 */
// export const boardAdvices = atom({
//   key: "boardAdvices",
//   default: [],
// });
