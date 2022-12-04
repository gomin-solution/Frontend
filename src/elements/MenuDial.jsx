import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import {
  adviceDelete,
  commentDelete,
  messageNav,
  recommentDelete,
  reportPost,
} from "../api/detailApi";
import { useNavigate } from "react-router-dom";
import { endChoice, removeChoice } from "../api/boardChoiceApi";
import { MsgAlert } from "./Alert";

//Dial 종류 : FilterDial, VoteDial, UserDial, CategoryDial

//정렬 필터
/* 투표 ----- 최신순, 참여자순, 마감임박순*/
/* 답해주기-----최신순, 조회순, 댓글순 */
/* 답해주기 댓글-----등록순, 좋아요순*/

export function FilterDial({ setFilterId, filters }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("최신순");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeMenu = (item) => {
    setMenu(item.filter);
    setFilterId(item.filterId);
    setAnchorEl(null);
  };

  return (
    <StDiv>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#737878", padding: 0 }}
      >
        {menu}
        <ExpandMoreIcon sx={{ color: "#737878" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        onClose={handleClose}
        sx={{
          "& .MuiMenu-list": {
            backgroundColor: "#19696A",
            padding: "0",
          },
        }}
      >
        {filters.map((item) => {
          return (
            <MenuItem
              sx={{
                color: "#FFFFFF",
              }}
              onClick={() => changeMenu(item)}
              key={item.filterId}
            >
              {item.filter}
            </MenuItem>
          );
        })}
      </Menu>
    </StDiv>
  );
}

//투표 점
/*삭제, 골라주기 종료*/
export function VoteDial({ choiceId, getMutation }) {
  const queryClient = useQueryClient();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* 게시글 삭제 */
  const removeChoiceMutation = useMutation(removeChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries(getMutation);
    },
  });

  /* 게시글 마감 */
  const endChoiceMutation = useMutation(endChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries(getMutation);
    },
  });

  return (
    <StDiv>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#737878", padding: "0", minWidth: "0" }}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiMenu-list": {
            backgroundColor: "#19696A",
            padding: "0",
          },
        }}
      >
        <MenuItem
          sx={{ color: "#FFFFFF" }}
          onClick={() => removeChoiceMutation.mutate(choiceId)}
        >
          삭제
        </MenuItem>
        <MenuItem
          sx={{ color: "#FFFFFF" }}
          onClick={() => endChoiceMutation.mutate(choiceId)}
        >
          골라주기 종료
        </MenuItem>
      </Menu>
    </StDiv>
  );
}

//게시판 상세페이지 게시글, 댓글, 대댓글
/*남 : 쪽지하기, 신고하기*/
/*본인 : 수정, 삭제 */
export function UserDial({
  user,
  id,
  setAdEdit,
  resBoard,
  target,
  reGet,
  nickname,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //쿼리 초기화
  const queryClient = useQueryClient();
  const nav = useNavigate();

  let useMutationName;
  if (reGet === "getDetail") {
    useMutationName = commentDelete;
  } else if (reGet === "getRecomment") {
    useMutationName = recommentDelete;
  } else if (reGet === "getAdviceScroll") {
    useMutationName = adviceDelete;
  }

  //게시글 삭제
  const { mutate } = useMutation(useMutationName, {
    onSuccess: () => {
      queryClient.invalidateQueries(reGet);
      reGet === "getAdviceScroll" && nav("/board-advice");
    },
  });

  // 쪽지 보내기
  const userKey = resBoard?.userKey;
  const category = resBoard?.category;
  const title = resBoard?.title;

  const messageMutation = useMutation(messageNav);
  const messageMutate = (note) =>
    messageMutation.mutate({ userKey, category, title, note });
  const MessageHandler = () => {
    setAnchorEl(null);
    MsgAlert(
      "쪽지 보내기",
      "쪽지 내용을 입력해주세요.",
      messageMutate,
      nickname
    );
  };

  // 신고하기
  const params = id;
  const targetName = target;

  const reportMutation = useMutation(reportPost);
  const reportMutate = (why) =>
    reportMutation.mutate({ params, targetName, why });
  const reportHandler = () => {
    setAnchorEl(null);
    MsgAlert("신고하기", "신고 사유를 입력해주세요.", reportMutate, nickname);
  };

  return (
    <StDiv>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#19696A", padding: "0", minWidth: "0" }}
      >
        <MoreVertIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiMenu-list": {
            backgroundColor: "#19696A",
            padding: "0",
          },
        }}
      >
        {user ? (
          <div>
            <MenuItem
              sx={{ color: "#FFFFFF" }}
              onClick={() => {
                setAdEdit(false);
              }}
            >
              수정
            </MenuItem>
            <MenuItem
              sx={{ color: "#FFFFFF" }}
              onClick={() => {
                mutate(id);
              }}
            >
              삭제
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem sx={{ color: "#FFFFFF" }} onClick={MessageHandler}>
              쪽지하기
            </MenuItem>
            <MenuItem sx={{ color: "#FFFFFF" }} onClick={reportHandler}>
              신고하기
            </MenuItem>
          </div>
        )}
      </Menu>
    </StDiv>
  );
}

/* 답해주기 카테고리 필터 (전체) */
/* 답해주기 글작성 카테고리 필터 (전체) */
export function CategoryDial({ setCategoryId, total }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("카테고리");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //선택시 이름 바꾸기
  const categories = [
    { topic: "여행", categoryId: 1 },
    { topic: "진로", categoryId: 2 },
    { topic: "쇼핑", categoryId: 3 },
    { topic: "연애", categoryId: 4 },
    { topic: "친구", categoryId: 5 },
    { topic: "반려동물", categoryId: 6 },
    { topic: "선물", categoryId: 7 },
    { topic: "건강", categoryId: 8 },
    { topic: "코디", categoryId: 9 },
    { topic: "육아", categoryId: 10 },
    { topic: "생활", categoryId: 11 },
    { topic: "기타", categoryId: 12 },
  ];

  if (total) {
    categories.unshift({ topic: "전체", categoryId: 0 });
  }

  const changeMenu = (category) => {
    setMenu(category.topic);
    setCategoryId(category.categoryId);
    setAnchorEl(null);
  };

  return (
    <StCategory>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#737878", padding: "0", minWidth: "0" }}
      >
        {menu}
        <ExpandMoreIcon />
      </Button>
      <Menu
        sx={{
          height: "22rem",
          "& .MuiMenu-list": {
            backgroundColor: "#19696A",
            padding: "0",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        onClose={handleClose}
      >
        {categories?.map((category) => {
          return (
            <div
              key={category.categoryId}
              style={{ borderBottom: "1px solid #D6E6E5" }}
            >
              <MenuItem
                onClick={() => changeMenu(category)}
                sx={{
                  color: "#FFFFFF",
                }}
              >
                {category.topic}
              </MenuItem>
            </div>
          );
        })}
      </Menu>
    </StCategory>
  );
}

const StDiv = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StCategory = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
