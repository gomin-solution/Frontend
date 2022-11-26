import Swal from "sweetalert2";

/* 버튼 1개 and 확인 후 이동 X */
export const Alert0 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonText: "확인",
    confirmButtonColor: "#6D6D6D",
    width: "20rem",
  });
};

/* 로그인 성공 */
export const Alert1 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonText: "확인",
    confirmButtonColor: "#6D6D6D",
    width: "20rem",
  }).then(() => {
    window.location.href = "/";
  });
};

/* 네 or 아니오 */
export const Alert2 = (text) => {
  Swal.fire({
    text: text,
    showCancelButton: true,
    confirmButtonText: "네",
    cancelButtonText: "아니오",
    confirmButtonColor: "#6D6D6D",
    cancelButtonColor: "#6D6D6D",
    width: "20rem",
  });
};

/* 회원가입 성공 */
export const Alert3 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonText: "확인",
    confirmButtonColor: "#e20606",
    width: "20rem",
  }).then(() => {
    window.location.replace("/login");
  });
};

/* 로그인 후 이용해주세요. */
export const Alert4 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonText: "확인",
    confirmButtonColor: "#6D6D6D",
    width: "20rem",
  });
};
