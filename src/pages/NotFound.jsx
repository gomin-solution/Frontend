import React from "react";
import styled from "styled-components";
import error from "../image/error/error.svg";
import background from "../image/error/background.jpg";
import { Container } from "../shared/css";

function NotFound() {
  return (
    <Stcontainer>
      <StBack src={background} alt="back" />
      <StError src={error} alt="error" />
      <StText>요청하신 페이지를 찾을 수 없습니다.</StText>
    </Stcontainer>
  );
}

export default NotFound;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  ${Container};
`;

const StBack = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const StError = styled.img`
  position: absolute;
  width: 60%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StText = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.Colors.gray3};
`;
