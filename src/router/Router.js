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
import Setting from "../pages/Setting";
import Bookmark from "../pages/Bookmark";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/setting" element={<Setting />} />

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
