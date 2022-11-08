import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Intro from "../pages/Intro";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
