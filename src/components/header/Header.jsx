import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

/*이전 버튼 + 제목바 */
export function Header1({ title }) {
  const nav = useNavigate();

  return (
    <>
      <Backcon
        onClick={() => {
          nav(-1);
        }}
      />
      <Block>
        <Title>{title}</Title>
      </Block>
    </>
  );
}

/*이전 버튼 + 제목바 + 검색버튼*/
export function Header2({ title }) {
  const nav = useNavigate();
  return (
    <>
      <Backcon
        onClick={() => {
          nav(-1);
        }}
      />
      <Searchcon />
      <Block>
        <Title>{title}</Title>
      </Block>
    </>
  );
}

/*이전 버튼 + 제목바 + 삭제버튼*/
export function Header3({ title }) {
  const nav = useNavigate();
  return (
    <>
      <Backcon
        onClick={() => {
          nav(-1);
        }}
      />
      <Block>
        <Title>{title}</Title>
      </Block>
    </>
  );
}

/*로고 + 알림바*/
export function Header4() {
  return <Block>dd</Block>;
}

/*민기님*/
export function Header5() {
  return (
    <MinkiHeader>
      <Arrow />
      <Block>Hi</Block>
      <Search />
    </MinkiHeader>
  );
}

//스타일컴포넌트
/*전체 블록*/
const Block = styled.div`
  min-height: 80px;
  display: flex;
  justify-content: center;
`;

/*제목바*/
const Title = styled.div`
  font-size: 20px;
  padding-top: 40px;
`;

/*뒤로가기 아이콘 */
const Backcon = styled(ArrowBackIosNewIcon)`
  width: 11.67rem;
  padding-top: 38px;
  position: fixed;
  margin-left: 20px;
  cursor: pointer;
`;

/*돋보기 아이콘*/
const Searchcon = styled(SearchIcon)`
  width: 24rem;
  position: fixed;
  padding-top: 38px;
  margin-left: 331px;
  cursor: pointer;
`;

const MinkiHeader = styled.div`
  /* background-color: green; */
  min-height: 80px;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  div {
    // Hi
    font-size: 20px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: -2px;
  }
`;
const Arrow = styled(ArrowBackIosNewIcon)`
  margin-left: 20px;
  cursor: pointer;
`;
const Search = styled(SearchIcon)`
  margin-right: 20px;
  cursor: pointer;
`;
