import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Style 관련
import "./index.css";
import { Reset } from "styled-reset";

// 패키지 관련
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <CookiesProvider>
        <Reset />
        <App />
      </CookiesProvider>
    </RecoilRoot>
  </QueryClientProvider>
);
