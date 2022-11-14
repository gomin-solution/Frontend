import styled from "styled-components";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [content, setContent] = useState("홈");
  const nav = useNavigate();

  const onMenu = (e) => {
    setContent((e) => e.title);
    nav(e.nav);
  };

  const menu = [
    { title: "홈", nav: "/" },
    { title: "게시판", nav: "/board" },
    { title: "종이접기", nav: "/reward" },
    { title: "마이페이지", nav: "/myinfo" },
  ];

  return (
    <StBlock>
      {menu?.map((item) =>
        item.title === content ? (
          <StAct key={item.title}>
            <StClick>
              <FiberManualRecordIcon fontSize="small" />
            </StClick>
            <div>{item.title}</div>
          </StAct>
        ) : (
          <StCon
            key={item.title}
            onClick={() => {
              onMenu(item);
            }}
          >
            <ChangeHistoryIcon fontSize="small" />
            <div>{item.title}</div>
          </StCon>
        )
      )}
    </StBlock>
  );
}

export default Footer;

/*전체 블록 */
const StBlock = styled.div`
  width: 100%;
  height: 4rem;
  background-color: white;
  position: absolute;
  bottom: 0px;

  display: flex;
  justify-content: space-evenly;
`;

/*아이콘 버튼 */
const StCon = styled.button`
  width: 5rem;
  height: 2rem;
  border: none;
  margin-top: 0.5rem;
  background-color: #ffffff;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

/*아이콘 활성화 */
const StAct = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 2rem;
  width: 5rem;
  height: 2rem;
  margin-top: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.sm};
  &:div {
    background-color: aqua;
  }
`;

/*아이콘 활성화 효과*/
const StClick = styled.div`
  background-color: #eaeaea;
  border-radius: 3rem;
`;
