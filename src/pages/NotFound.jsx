import React from "react";
import styled from "styled-components";

function NotFound() {
  return <Stcontainer>NotFound</Stcontainer>;
}

export default NotFound;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);
`;
