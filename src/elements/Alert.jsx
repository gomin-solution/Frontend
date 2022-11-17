import Swal from "sweetalert2";

/* 게시물 삭제 */
export const Alert1 = (text) => {
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

/* 회원가입창 메시지 */
export const Alert2 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonColor: "#6D6D6D",
    width: "20rem",
  });
};

export default Alert1;
