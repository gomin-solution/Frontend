import React, { useEffect } from "react";
import Router from "./router/Router";

function App() {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
