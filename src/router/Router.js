import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Intro from "../pages/Intro";
import SignUp from "../pages/SignUp";
import PostAdvice from "../pages/PostAdvice";
import PostCategory from "../pages/PostCategory";
import PostChoice from "../pages/PostChoice";
import MyPage from "../pages/MyPage";
import Board from "../pages/Board";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/post-category" element={<PostCategory />} />
        <Route path="/post-advice" element={<PostAdvice />} />
        <Route path="/post-choice" element={<PostChoice />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
