import Swal from "sweetalert2";
import { removeCookie } from "../api/cookie";
import "../elements/Alert.css";

/* 확인 후 이동 */
export const OkayNaviAlert = (text, navi, userKey) => {
  Swal.fire({
    customClass: {
      confirmButton: "confirm-Btn",
    },
    buttonsStyling: false,
    text: text,
    confirmButtonText: "확인",
  }).then(() => {
    window.location.href = navi;
    if (userKey) {
      removeCookie("accessToken");
      removeCookie("refreshToken");
      localStorage.removeItem(userKey);
    }
  });
};

/*로그인 + 확인 후 이동 + 취소 */
export const LoginAlert = () => {
  Swal.fire({
    customClass: {
      confirmButton: "login-Btn",
      cancelButton: "cancle-Btn",
      actions: "login-act",
      htmlContainer: "login-text",
    },
    buttonsStyling: false,
    text: "로그인 후 이용해주세요.",

    cancelButtonText: "취소",
    confirmButtonText: "로그인",
    showCancelButton: true,
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/login";
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
    html: text,
    confirmButtonText: "확인",
  });
};

/*오류 텍스트 확인버튼(닫힘) */
export const ErrorAlert = (text, navi) => {
  Swal.fire({
    customClass: {
      confirmButton: "confirm-Btn",
      htmlContainer: "error-text",
    },
    buttonsStyling: false,
    text: text,
    color: "#BA1A1A",
    confirmButtonText: "확인",
  }).then(() => {
    if (navi) {
      window.location.href = navi;
    }
  });
};

/*텍스트 + 확인 + 취소 */
export const ChooseAlert = (text, textBtn, mutate, userKey, data, setState) => {
  Swal.fire({
    customClass: {
      confirmButton: "login-Btn",
      cancelButton: "cancle-Btn",
      actions: "login-act",
      htmlContainer: "login-text",
    },
    buttonsStyling: false,
    text: text,

    cancelButtonText: "취소",
    confirmButtonText: textBtn,
    showCancelButton: true,
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      if (userKey) {
        mutate();
        localStorage.removeItem(userKey);
      } else if (mutate) {
        mutate(data);
      } else {
        setState(true);
      }
    }
  });
};

/* 쪽지 보내기, 신고하기 */
export const MsgAlert = (title, placeholder, mutate, nickname) => {
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
export const RewardedAlert = (e) => {
  Swal.fire({
    customClass: {
      htmlContainer: "htmlContainer-reward",
      title: "title-msg",
      closeButton: "closeButton-msg",
      image: "image-reward",
    },
    title: e.rewardName,
    html: e.pharse,
    imageUrl: e.img,
    showCloseButton: true,
    showConfirmButton: false,
  });
};
