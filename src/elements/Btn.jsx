import styled from "styled-components";

/*긴 사이즈 버튼*/
export function Btn1({ text, active }) {
  return <Stbtn>{text}</Stbtn>;
}

const Stbtn = styled.button`
  font-size: ${(props) => props.theme.fontSizes.base};
  width: 100%;
  height: 3rem;
  border: none;
  cursor: pointer;
`;
