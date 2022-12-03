import Swal from "sweetalert2";
import "../elements/Alert.css";

/* 확인 후 이동 */
export const OkayNaviAlert = (text, navi, removeKey) => {
  Swal.fire({
    customClass: {
      confirmButton: "confirm-Btn",
    },
    buttonsStyling: false,
    text: text,
    confirmButtonText: "확인",
  }).then(() => {
    window.location.href = navi;
    if (removeKey) {
      localStorage.removeItem(removeKey);
    }
  });
};

/* 텍스트 + 확인버튼(닫힘) */
export const OkayAlert = (text) => {
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
export const ErrorAlert = (text) => {
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
export const Alert4 = () => {
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

/* 쪽지 보내기, 신고하기 */
export const Alert5 = (title, placeholder, mutate, nickname) => {
  Swal.fire({
    customClass: {
      htmlContainer: "htmlContainer-msg",
      title: "title-msg",
      closeButton: "closeButton-msg",
      input: "input-msg",
      confirmButton: "confirm-msg",
    },
    buttonsStyling: false,
    text:
      title === "쪽지 보내기"
        ? `To.${nickname}`
        : `신고 대상 닉네임 : ${nickname} `,
    title: title,
    input: "textarea",
    inputPlaceholder: placeholder,
    showCloseButton: "true",
    confirmButtonText: "전송",
  }).then(function (result) {
    if (result.value) {
      mutate(result.value);
    }
  });
};

/* 획득 리워드 띄우기*/
export const Alert6 = (e) => {
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

/*텍스트 + 확인 + 취소  */
export const Alert7 = (text, mutate, id) => {
  Swal.fire({
    customClass: {
      confirmButton: "okay-Btn",
      cancelButton: "cancle-Btn",
      actions: "login-act",
      htmlContainer: "login-text",
    },
    buttonsStyling: false,
    text: text,

    cancelButtonText: "취소",
    confirmButtonText: "확인",
    showCancelButton: true,
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      mutate(id);
    }
  });
};
