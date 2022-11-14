import React from "react";
import styled from "styled-components";

function NotFound() {
  return <div>NotFound</div>;
}

export default NotFound;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 5rem);
`;
