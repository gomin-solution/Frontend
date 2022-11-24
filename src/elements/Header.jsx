import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { socket } from "../api/socketio";

/*이전 버튼 + 제목바 */
export function Header1({ title, roomId, navi = -1, leave = false }) {
  const nav = useNavigate();

  // 이전 버튼 클릭 시 room 나가기 요청
  if (leave) {
    socket.emit("leave_room", roomId);
  }

  return (
    <StBlock>
      <StBackcon
        onClick={() => {
          nav(navi);
        }}
      />
      <StTitle>{title}</StTitle>
    </StBlock>
  );
}

/*제목바 + 검색버튼*/
export function Header2({ title }) {
  const nav = useNavigate();

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
    <StBlock>
      <StLogo>로고</StLogo>
      <StAlram />
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
export function Header5({ title }) {
  const nav = useNavigate();
  return (
    <StBlock>
      <StBackcon
        onClick={() => {
          nav(-1);
        }}
      />
      <StTitle>{title}</StTitle>
      <StBtn>완료</StBtn>
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
      <StLogo>로고</StLogo>
      <StLogin onClick={loginHandler}>로그인</StLogin>
    </StBlock>
  );
}

/* 이전 + 검색바 + 검색버튼*/
export function Header7() {
  const nav = useNavigate();

  /* 검색어 입력 후 페이지이동 */
  const [search, setSearch] = useState("");
  const searchSubmit = () => {
    if (search) {
      nav("/search-result", { state: search });
    } else {
      return;
    }
  };

  return (
    <>
      <StBlock as="form" onSubmit={searchSubmit}>
        <StBackcon
          onClick={() => {
            nav(-1);
          }}
        />
        <StSearch
          type="text"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{ display: "flex", alignItems: "center", margin: "0rem 1rem" }}
        >
          <StSearchcon />
        </button>
      </StBlock>
      <hr />
    </>
  );
}

//스타일컴포넌트
/*전체 블록*/
const StBlock = styled.div`
  width: 100%;
  height: 4rem;

  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.boxColors.bg};
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
  cursor: pointer;
  /* position: absolute; */
  right: 2rem;
`;

/*로고 아이콘 */
const StLogo = styled.div`
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

/*완료버튼 */
const StBtn = styled.button`
  position: absolute;
  right: 2rem;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.xl};
`;

/* 검색바 */
const StSearch = styled.input`
  background-color: ${(props) => props.theme.boxColors.gray1};
  width: 100%;
  height: 2rem;
  margin-left: ${(props) => props.theme.paddings.base};
  padding-left: ${(props) => props.theme.paddings.xsm};
  border: none;
`;

/* 로그인 */
const StLogin = styled.div`
  cursor: pointer;
  position: absolute;
  right: 2rem;
`;
