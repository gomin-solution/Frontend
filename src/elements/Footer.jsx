import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexCenter } from "../shared/css";
import { useRecoilValue } from "recoil";
import { userKeyAtom } from "../state/atom";
import { LoginAlert } from "./Alert";
import home from "../image/footerIcon/home.svg";
import board from "../image/footerIcon/board.svg";
import message from "../image/footerIcon/message.svg";
import reward from "../image/footerIcon/reward.svg";
import homeClicked from "../image/footerIcon/homeClicked.svg";
import boardClicked from "../image/footerIcon/boardClicked.svg";
import messageClicked from "../image/footerIcon/messageClicked.svg";
import rewardClicked from "../image/footerIcon/rewardClicked.svg";

function Footer({ title }) {
  const userKey = useRecoilValue(userKeyAtom);
  const nav = useNavigate();

  const onMenu = (e) => {
    if (!userKey && (e.nav === "/rooms" || e.nav === "/reward")) {
      LoginAlert();
    } else {
      nav(e.nav);
    }
  };

  const menu = [
    { title: "메인", nav: "/main", img: home, imgClicked: homeClicked },
    {
      title: "고민접기",
      nav: "/board-choice",
      img: board,
      imgClicked: boardClicked,
    },
    {
      title: "쪽지함",
      nav: "/rooms",
      img: message,
      imgClicked: messageClicked,
    },
    { title: "수집함", nav: "/reward", img: reward, imgClicked: rewardClicked },
  ];

  return (
    <StBlock>
      {menu?.map((item) => {
        return item.title === title ? (
          <StAct key={item.title}>
            <StClick>
              <img
                src={item.imgClicked}
                alt="icon"
                style={{ color: "#D9D9D9" }}
              />
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
            <img src={item.img} alt="icon" />
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
  max-width: 26rem;
  height: 4rem;
  background-color: ${(props) => props.theme.Colors.foot};
  position: fixed;
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
