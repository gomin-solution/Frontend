// React import
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Cookie import
import { CookiesProvider } from "react-cookie";

// Package import
import { ThemeProvider } from "styled-components";

// Style import
import "./index.css";
import Theme from "../src/styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </CookiesProvider>
);
