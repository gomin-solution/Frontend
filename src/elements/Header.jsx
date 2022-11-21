import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert5 } from "./Alert";

/*이전 버튼 + 제목바 */
export function Header1({ title, navi = -1 }) {
  const nav = useNavigate();

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
      <StSearchcon onClick={() => nav("/search")} />
    </StBlock>
  );
}

/*로고 + 알림바*/
export function Header3() {
  return (
    <StBlock>
      <StLogo>로고</StLogo>
      <StAlram />
      <StSet />
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
    nav("/search", { state: search });
  };

  /* 검색창 전환 */
  const [isSearch, setIsSearch] = useState(false);
  const isSearchChange1 = () => {
    setIsSearch((prev) => !prev);
  };
  const isSearchChange2 = () => {
    search ? nav("/search", { state: search }) : setIsSearch((prev) => !prev);
  };

  return (
    <>
      <StBlock>
        <StBackcon
          onClick={() => {
            nav(-1);
          }}
        />
        <StSearchcon onClick={() => nav("/search")} />
        <form
          onSubmit={searchSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <StSearch
            type="text"
            value={search}
            placeholder="검색어를 입력하세요."
            onChange={(e) => setSearch(e.target.value)}
          />
          <StSearchcon type="button" onClick={isSearchChange2} />
        </form>
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
  position: absolute;
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
  width: 16rem;
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
