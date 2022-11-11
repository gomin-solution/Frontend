import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/*하단 메뉴바*/
export function Btn1() {
  return <div></div>;
}

/*긴 사이즈 버튼*/
export function Btn2({ text, active }) {
  return <Stbtn>{text}</Stbtn>;
}

const Stbtn = styled.button`
  height: 49px;
`;
