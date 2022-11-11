import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useNavigate } from "react-router-dom";

/*이전 버튼 + 제목바 */
export function Header1({ title }) {
  const nav = useNavigate();

  return (
    <div style={{ position: "fixed", background: "aqua" }}>
      <Block>
        <Backcon
          onClick={() => {
            nav(-1);
          }}
        />
        <Title>{title}</Title>
      </Block>
    </div>
  );
}

/*이전 버튼 + 제목바 + 검색버튼*/
export function Header2({ title }) {
  const nav = useNavigate();
  return (
    <Block>
      <Backcon
        onClick={() => {
          nav(-1);
        }}
      />
      <Title>{title}</Title>
      <Searchcon />
    </Block>
  );
}

/*이전 버튼 + 제목바 + 삭제버튼*/
export function Header3({ title }) {
  const nav = useNavigate();
  return (
    <div style={{ position: "fixed" }}>
      <Block>
        <Backcon
          onClick={() => {
            nav(-1);
          }}
        />
        <Title>{title}</Title>
        <Deletecon />
      </Block>
    </div>
  );
}

/*로고 + 알림바*/
export function Header4() {
  return (
    <Block>
      <Logo>로고</Logo>
      <Alram />
    </Block>
  );
}

//스타일컴포넌트
/*전체 블록*/
const Block = styled.div`
  min-height: 80px;
  position: relative;
`;

/*제목바*/
const Title = styled.div`
  font-size: 20px;
  position: absolute;
  top: 40px;
  left: 0px;
  right: 0px;
  text-align: center;
`;

/*뒤로가기 아이콘 */
const Backcon = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 38px;
`;

/*돋보기 아이콘*/
const Searchcon = styled(SearchIcon)`
  position: absolute;
  right: 20px;
  top: 38px;
  cursor: pointer;
`;

/*휴지통 아이콘*/
const Deletecon = styled(DeleteOutlineIcon)`
  position: absolute;
  right: 20px;
  top: 38px;
  cursor: pointer;
`;

/*로고 아이콘 */
const Logo = styled.div`
  position: absolute;
  left: 30px;
  top: 38px;
  font-size: 20px;
`;

/*알람, 쪽지 아이콘 묶기 */
const ConSet = styled.div`
  /* position: absolute;
  left: 18px;
  top: 38px;*/
`;

/*알람 아이콘 */
const Alram = styled(NotificationsNoneOutlinedIcon)`
  position: absolute;
  right: 18px;
  top: 38px;
  cursor: pointer;
`;
