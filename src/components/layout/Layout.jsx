import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <StLayout className="mobLayout">{children}</StLayout>;
}

export default Layout;

const StLayout = styled.div`
  background-color: white;
  width: 375px;
  height: 100vh;
  border: 1px solid gray;
  margin: auto;
`;
