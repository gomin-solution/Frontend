import styled from "styled-components";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";

function Footer({ title }) {
  const nav = useNavigate();

  const onMenu = (e) => {
    nav(e.nav);
  };

  const menu = [
    { title: "메인", nav: "/" },
    { title: "고민접기", nav: "/board-choice" },
    { title: "쪽지", nav: "/message" },
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
