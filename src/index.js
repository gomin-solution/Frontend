// React import
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Cookie import
import { CookiesProvider } from "react-cookie";
import { GlobalStyle } from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>
    <GlobalStyle />
    <App />
  </CookiesProvider>
);
