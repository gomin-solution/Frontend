import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Intro from "../pages/Intro";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/Post";
import AdvicePost from "../pages/AdvicePost";
import ChoicePost from "../pages/ChoicePost";
import AdviceCategory from "../pages/AdviceCategory";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/advice" element={<AdvicePost />} />
        <Route path="/post/category" element={<AdviceCategory />} />
        <Route path="/post/choice" element={<ChoicePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
