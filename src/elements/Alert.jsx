import Swal from "sweetalert2";
import "../elements/Alert.css";

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

/*텍스트 + 확인버튼(닫힘) */
export const Alert5 = (text) => {
  Swal.fire({
    customClass: {
      confirmButton: "confirm-Btn",
    },
    buttonsStyling: false,
    text: text,
    confirmButtonText: "확인",
  });
};

/*오류 텍스트 확인버튼(닫힘) */
export const Alert6 = (text) => {
  Swal.fire({
    customClass: {
      confirmButton: "confirm-Btn",
      htmlContainer: "error-text",
    },
    buttonsStyling: false,
    text: text,
    color: "#BA1A1A",
    confirmButtonText: "확인",
  });
};

/*로그인 + 로그인하러가기 + 취소 */
export const Alert7 = () => {
  Swal.fire({
    customClass: {
      confirmButton: "login-Btn",
      cancelButton: "cancle-Btn",
      actions: "login-act",
      htmlContainer: "login-text",
    },
    buttonsStyling: false,
    text: "로그인 후 이용 가능합니다.",

    cancelButtonText: "취소",
    confirmButtonText: "로그인",
    showCancelButton: true,
    reverseButtons: true,
  });
};

/* 쪽지 보내기 */
export const Alert8 = () => {
  Swal.fire({
    customClass: {
      htmlContainer: "htmlContainer-msg",
      title: "title-msg",
      closeButton: "closeButton-msg",
      input: "input-msg",
      confirmButton: "confirm-msg",
    },
    buttonsStyling: false,
    text: "받는 사람 닉네임",
    title: "쪽지보내기",
    input: "textarea",
    inputPlaceholder: "쪽지내용을 입력해주세요.",
    showCloseButton: "true",
    confirmButtonText: "전송",
  });
};

/* 획득 리워드 띄우기*/
export const Alert9 = (e) => {
  Swal.fire({
    customClass: {
      htmlContainer: "htmlContainer-reward",
      title: "title-msg",
      closeButton: "closeButton-msg",
      image: "image-reward",
    },
    title: "리워드 이름",
    text: "행운의말",
    imageUrl: e,
    showCloseButton: true,
    showConfirmButton: false,
  });
};
