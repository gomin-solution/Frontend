import React from "react";
import { Reset } from "styled-reset";
import Router from "./router/Router";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <Reset />
      <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
