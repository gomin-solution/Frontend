import styled from "styled-components";

function Footer() {
  return <StBlock>Footer</StBlock>;
}

export default Footer;

/*전체 블록 */
const StBlock = styled.div`
  width: 100%;
  height: 4rem;

  z-index: 10;
  bottom: 0;

  background-color: ${(props) => props.theme.boxColors.bg};
`;
