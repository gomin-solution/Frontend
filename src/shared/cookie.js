import { Cookies } from "react-cookie";
import { decodeToken } from "react-jwt";

const cookies = new Cookies();

// 로그인 시 사용자 정보를 담은 쿠키를 생성한다
export const setAccessToken = (accesstoken) => {
  return cookies.set("accesstoken", accesstoken, {
    samSite: "Strict",
    path: "/",
  });
};
export const setRefreshToken = (refreshtoken) => {
  return cookies.set("refreshtoken", refreshtoken, {
    samSite: "Strict",
    path: "/",
  });
};

// 사용자 인증이 필요한 데이터를 요청할 때 쿠키를 가져온다
export const getCookie = (name) => {
  return cookies.get(name);
};

//쿠키를 지운다
export const removeCookie = (name) => {
  return cookies.remove(name);
};

export const decodeCookie = (name) => {
  return decodeToken(getCookie(name));
};
