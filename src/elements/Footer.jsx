import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { FlexCenter } from "../shared/css";

function Footer({ title }) {
  const nav = useNavigate();

  const onMenu = (e) => {
    nav(e.nav);
  };

  const menu = [
    { title: "메인", nav: "/main" },
    { title: "고민 접기", nav: "/board-choice" },
    { title: "쪽지", nav: "/rooms" },
    { title: "수집함", nav: "/reward" },
  ];

  return (
    <StBlock>
      {menu?.map((item) => {
        return item.title === title ? (
          <StAct key={item.title}>
            <StClick>
              <FiberManualRecordIcon fontSize="small" />
            </StClick>
            <div style={{ width: "100%" }}>{item.title}</div>
          </StAct>
        ) : (
          <StCon
            key={item.title}
            onClick={() => {
              onMenu(item);
            }}
          >
            <ChangeHistoryIcon fontSize="small" />
            <div style={{ width: "100%" }}>{item.title}</div>
          </StCon>
        );
      })}
    </StBlock>
  );
}

export default Footer;

/*전체 블록 */
const StBlock = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.theme.Colors.foot};
  position: absolute;
  bottom: 0px;

  display: flex;
  justify-content: space-evenly;
`;

/*아이콘 버튼 */
const StCon = styled.button`
  width: 5rem;
  margin-top: 0.5rem;
  color: #526161;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

/*아이콘 활성화 */
const StAct = styled.button`
  border-radius: 2rem;
  width: 5rem;
  margin-top: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

/*아이콘 활성화 효과*/
const StClick = styled.div`
  background-color: #b0cccc;
  height: 1.8rem;
  border-radius: 3rem;
  ${FlexCenter};
`;
