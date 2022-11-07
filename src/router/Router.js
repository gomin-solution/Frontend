import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Join from "../pages/Join";
import Intro from "../pages/Intro";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
