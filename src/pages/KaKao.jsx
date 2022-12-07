import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { kakaoTokenGet, kakaoTokenPost } from "../api/socialLogin";
import Loading from "../components/Loading";
import { ErrorAlert, OkayNaviAlert } from "../elements/Alert";
import { userKeyAtom } from "../state/atom";

const KaKao = () => {
  const nav = useNavigate();

  const setUserKey = useSetRecoilState(userKeyAtom);

  /* code get */
  let params = new URL(document.URL).searchParams;
  let code = params.get("code");

  /* token에서 id_token get */
  const { data: res } = useQuery(["kakao", code], () => kakaoTokenGet(code), {
    refetchOnWindowFocus: false,
    retry: false,
  });
  const idToken = res?.data.id_token.split(".")[1];
  let payload;
  if (idToken) {
    payload = JSON.parse(window.atob(idToken)).sub;
  }

  /* user info post */
  const { mutate, data, isError } = useMutation(kakaoTokenPost);
  useEffect(() => {
    if (payload !== undefined) {
      mutate(payload);
    }
  }, [payload]);

  /* 가입 여부에 따른 예외처리 */
  const isMember = data?.data?.isMember;
  useEffect(() => {
    if (isError) {
      ErrorAlert(`이미 로그인이 되어 있습니다.`, "/main");
    } else if (isMember === true) {
      setUserKey(data?.data?.userKey);
      OkayNaviAlert(`${data?.data?.nickname}님 반갑습니다.`, "/main");
    } else if (isMember === false) {
      nav("/nickname");
    }
  }, [isMember, isError]);

  return <Loading />;
};

export default KaKao;
