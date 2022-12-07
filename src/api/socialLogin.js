import axios from "axios";
import { instance } from "./api";
import { setCookie } from "./cookie";

/* 카카오 token get */
export const kakaoTokenGet = async (code) => {
  const payload = `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${code}`;
  const res = await axios.post("https://kauth.kakao.com/oauth/token", payload);
  return res;
};

/* 카카오 token post */
export const kakaoTokenPost = async (payload) => {
  const res = await instance.post("/kakao", { id: payload });
  setCookie("accessToken", res?.data.accessToken, {
    maxAge: 60 * 60 * 24 * 15,
    httpOnly: true,
  });
  setCookie("refreshToken", res?.data.refreshToken, {
    maxAge: 60 * 60 * 24 * 15,
    httpOnly: true,
  });
  return res;
};
