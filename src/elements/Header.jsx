import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { socket } from "../api/socketio";

/*스타일 관련*/
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import logoFolding from "../image/logo/logoFolding.svg";
import { OkayAlert } from "./Alert";

/*이전 버튼 + 제목바 */
export function Header1({ title, roomId, navi = -1, leave = false }) {
  const nav = useNavigate();

  const backHandler = () => {
    // 이전 버튼 클릭 시 room 나가기 요청
    if (leave) {
      socket.emit("leave_room", roomId);
      sessionStorage.removeItem("roomId");
    }
    nav(navi);
  };

  return (
    <StBlock>
      <StBackcon onClick={backHandler} />
      <StTitle>{title}</StTitle>
    </StBlock>
  );
}

/*제목바 + 검색버튼*/
export function Header2({ title, navi }) {
  const nav = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("searchNav", navi);
  }, []);

  return (
    <StBlock>
      <StTitle>{title}</StTitle>
      <StSearchcon
        style={{ position: "absolute", right: "5.1%" }}
        onClick={() => nav("/search")}
      />
    </StBlock>
  );
}

/*로고 + 알림바*/
export function Header3() {
  const nav = useNavigate();

  return (
    <StBlock style={{ color: "#19696A" }}>
      <StLogo alt="로고" src={logoFolding} />
      <StAlram onClick={() => nav("/alarm")} />
      <StSet onClick={() => nav("/setting")} />
    </StBlock>
  );
}

/* 제목바 */
export function Header4({ title }) {
  return (
    <StBlock>
      <StTitle>{title}</StTitle>
    </StBlock>
  );
}

/*이전 + 제목 + 완료 */
export function Header5({ title, clicked }) {
  const nav = useNavigate();
  return (
    <StBlock>
      <StBackcon
        onClick={() => {
          nav(-1);
        }}
      />
      <StTitle>{title}</StTitle>
      <StBtn disabled={clicked}>완료</StBtn>
    </StBlock>
  );
}

/* 로고 + 로그인 */
export function Header6() {
  const nav = useNavigate();
  const loginHandler = () => {
    nav("/login");
  };

  return (
    <StBlock>
      <StLogo alt="로고" src={logoFolding} />
      <StBtn onClick={loginHandler}>로그인</StBtn>
    </StBlock>
  );
}

/* 이전 + 검색바 + 검색버튼*/
export function Header7() {
  const nav = useNavigate();
  const navi = sessionStorage.getItem("searchNav");

  /* 검색어 입력 후 페이지이동 */
  const [search, setSearch] = useState("");
  const searchSubmit = (e) => {
    if (search === "") {
      OkayAlert("검색어를 입력해주세요.");
      e.preventDefault();
    } else {
      if (search) {
        nav("/search-result", { state: search });
      } else {
        return;
      }
    }
  };

  return (
    <>
      <StBlock as="form" onSubmit={(e) => searchSubmit(e)}>
        {navi === null ? (
          <StBackcon
            onClick={() => {
              nav(-1);
            }}
          />
        ) : (
          <StBackcon
            onClick={() => {
              nav(navi);
            }}
          />
        )}
        <StSearch
          type="text"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0rem 0.8rem",
          }}
        >
          <StSearchcon />
        </button>
      </StBlock>
    </>
  );
}

//스타일컴포넌트
/*전체 블록*/
const StBlock = styled.div`
  width: 100%;
  max-width: 26rem;
  height: 4rem;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.Colors.bg2};
`;

/*제목바*/
const StTitle = styled.div`
  margin-left: 1rem;
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.xl};
`;

/*뒤로가기 아이콘 */
const StBackcon = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  margin-left: 2rem;
`;

/*돋보기 아이콘*/
const StSearchcon = styled(SearchIcon)`
  color: #19696a;
  cursor: pointer;
  /* position: absolute; */
  right: 2rem;
`;

/*로고 아이콘 */
const StLogo = styled.img`
  width: 25%;
  position: absolute;
  left: 2rem;
`;

/*알람 아이콘 */
const StAlram = styled(NotificationsNoneOutlinedIcon)`
  cursor: pointer;
  position: absolute;
  right: 4.5rem;
`;

/*설정 아이콘 */
const StSet = styled(SettingsOutlinedIcon)`
  cursor: pointer;
  position: absolute;
  right: 2rem;
`;

/*완료버튼 */ /* 로그인 */
const StBtn = styled.button`
  position: absolute;
  cursor: pointer;
  right: 2rem;
  color: ${(props) => props.theme.Colors.blueGreen3};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.xl};
`;

/* 검색바 */
const StSearch = styled.input`
  background-color: #b0cccc;
  color: ${(props) => props.theme.Colors.blueGreen3};
  width: 100%;
  height: 2rem;
  margin-left: ${(props) => props.theme.paddings.base};
  padding-left: ${(props) => props.theme.paddings.xsm};
  border: none;
`;
