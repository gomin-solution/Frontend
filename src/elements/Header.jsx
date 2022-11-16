import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

/*이전 버튼 + 제목바 */
export function Header1({ title }) {
  const nav = useNavigate();

  return (
    <StBlock>
      <StBackcon
        onClick={() => {
          nav(-1);
        }}
      />
      <StTitle>{title}</StTitle>
    </StBlock>
  );
}

/*이전 버튼 + 제목바 + 검색버튼*/
export function Header2({ title }) {
  // const [isSearch, setIsSearch] = useState(false);

  return (
    <StBlock>
      <StTitle>{title}</StTitle>
      <StSearchcon />
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
  justify-content: center;
  background-color: ${(props) => props.theme.boxColors.bg};
`;

/*제목바*/
const StTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxl};
`;

/*뒤로가기 아이콘 */
const StBackcon = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  position: absolute;
  left: 2rem;
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
