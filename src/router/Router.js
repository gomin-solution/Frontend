import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Intro from "../pages/Intro";
import Signup from "../pages/Signup";
import PostAdvice from "../pages/PostAdvice";
import PostChoice from "../pages/PostChoice";
import BoardChoice from "../pages/BoardChoice";
import BoardAdvice from "../pages/BoardAdvice";
import Reward from "../pages/Reward";
import Note from "../pages/Room";
import NoteDetail from "../pages/RoomDetail";
import DetailAdvice from "../pages/DetailAdvice";
import Search from "../pages/Search";
import SearchResult from "../pages/SearchResult";
import Alarm from "../pages/Alarm";
import Setting from "../pages/Setting";
import Bookmark from "../pages/Bookmark";
import MyPost from "../pages/MyPost";
import Splash from "../pages/Splash";
import MyInfoChange from "../pages/MyInfoChange";
import KaKao from "../pages/KaKao";
import Nickname from "../pages/Nickname";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao" element={<KaKao />} />
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Splash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/bookmark" element={<Bookmark />} />

        <Route path="/alarm" element={<Alarm />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/myinfo-change" element={<MyInfoChange />} />

        <Route path="/board-choice" element={<BoardChoice />} />
        <Route path="/board-advice" element={<BoardAdvice />} />
        <Route path="/board-advice/:adviceId" element={<DetailAdvice />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search-result" element={<SearchResult />} />

        <Route path="/post-choice" element={<PostChoice />} />
        <Route path="/post-advice" element={<PostAdvice />} />

        <Route path="/rooms" element={<Note />} />
        <Route path="/rooms/:roomId" element={<NoteDetail />} />

        <Route path="/reward" element={<Reward />} />

        {/* 그 밖의 요청시 404 페이지로 보내주기 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
