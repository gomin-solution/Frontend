import React, { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { kakaoTokenGet, kakaoTokenPost } from "../api/socialLogin";
import Loading from "../components/Loading";

const Naver = () => {
  // let params = new URL(document.URL).searchParams;
  // let code = params.get("code");

  // const { data: res } = useQuery(["kakao, code"], () => kakaoTokenGet(code));
  // const idToken = res?.data.id_token.split(".")[1];

  // let payload;
  // if (idToken) {
  //   payload = window.atob(idToken);
  // }

  // const { mutate } = useMutation(kakaoTokenPost(payload));

  // useEffect(() => {
  //   mutate();
  // }, [idToken, payload]);

  // console.log("aaa", payload);

  return <Loading />;
};

export default Naver;
