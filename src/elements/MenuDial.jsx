import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { adviceDelete, commentDelete } from "../api/detailApi";
import { useNavigate } from "react-router-dom";
import { endChoice, removeChoice } from "../api/boardChoiceApi";

//투표 정렬 필터
/*최신순, 참여자순, 마감임박순*/
export function MenuDial0({ setFilterId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("최신순");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //선택시 이름 바꾸기
  const filters = [
    { filter: "최신순", filterId: 0 },
    { filter: "참여자순", filterId: 1 },
    { filter: "마감순", filterId: 2 },
  ];
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
        sx={{ color: "black" }}
      >
        {menu}
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        onClose={handleClose}
      >
        {filters.map((item) => {
          return (
            <MenuItem onClick={() => changeMenu(item)} key={item.filterId}>
              {item.filter}
            </MenuItem>
          );
        })}
      </Menu>
    </StDiv>
  );
}

//투표 점
/*삭제, 투표종료*/
export function MenuDial1({ choiceId }) {
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
      queryClient.invalidateQueries("getChoiceScroll");
    },
  });

  /* 게시글 마감 */
  const endChoiceMutation = useMutation(endChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries("getChoiceScroll");
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
        sx={{ color: "black", padding: "0", minWidth: "0" }}
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
      >
        <MenuItem onClick={() => removeChoiceMutation.mutate(choiceId)}>
          삭제
        </MenuItem>
        <MenuItem onClick={() => endChoiceMutation.mutate(choiceId)}>
          투표종료
        </MenuItem>
      </Menu>
    </StDiv>
  );
}

//게시판 정렬 필터
/*최신순, 조회순, 댓글순 */
export function MenuDial2({ setFilterId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("최신순");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //선택시 이름 바꾸기
  const filters = [
    { filter: "최신순", filterId: 0 },
    { filter: "조회순", filterId: 1 },
    { filter: "댓글순", filterId: 2 },
  ];
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
        sx={{ color: "black", padding: "0", minWidth: "0" }}
      >
        {menu}
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {filters.map((item) => {
          return (
            <MenuItem onClick={() => changeMenu(item)} key={item.filterId}>
              {item.filter}
            </MenuItem>
          );
        })}
      </Menu>
    </StDiv>
  );
}

//게시판 상세페이지 게시글
/*남 : 쪽지하기, 신고하기*/
/*본인 : 수정, 삭제 */
export function MenuDial3({ user, id, setAdEdit }) {
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

  //게시글 삭제
  const { mutate } = useMutation(adviceDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAdviceScroll");
      nav("/board-advice");
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
        sx={{ color: "black", padding: "0", minWidth: "0" }}
      >
        <MoreVertIcon />
      </Button>
      {user ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              setAdEdit(false);
            }}
          >
            수정
          </MenuItem>
          <MenuItem
            onClick={() => {
              mutate(id);
            }}
          >
            삭제
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>쪽지하기</MenuItem>
          <MenuItem>신고하기</MenuItem>
        </Menu>
      )}
    </StDiv>
  );
}

//게시판 상세페이지 댓글 정렬 필터
/*등록순, 좋아요순*/
export function MenuDial4() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("등록순");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //선택시 이름 바꾸기
  const filters = [
    { filter: "등록순", filterId: 0 },
    { filter: "좋아요순", filterId: 1 },
  ];
  const changeMenu = (item) => {
    setMenu(item.filter);
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
        sx={{ color: "black", padding: "0", minWidth: "0" }}
      >
        {menu}
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {filters.map((item) => {
          return (
            <MenuItem onClick={() => changeMenu(item)} key={item.filterId}>
              {item.filter}
            </MenuItem>
          );
        })}
      </Menu>
    </StDiv>
  );
}

//게시판 상세페이지 댓글
/*남 : 쪽지하기, 신고하기*/
/*본인 : 수정, 삭제 */
export function MenuDial5({ user, id, setIsEdit }) {
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

  //댓글 삭제
  const { mutate } = useMutation(commentDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
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
        sx={{ color: "black", padding: "0", minWidth: "0" }}
      >
        <MoreVertIcon />
      </Button>
      {user ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              setIsEdit(false);
            }}
          >
            수정
          </MenuItem>
          <MenuItem
            onClick={() => {
              mutate(id);
            }}
          >
            삭제
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>쪽지하기</MenuItem>
          <MenuItem>신고하기</MenuItem>
        </Menu>
      )}
    </StDiv>
  );
}

/* 답해주기 카테고리 */
export function MenuDial6({ setCategoryId }) {
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
    { topic: "전체", categoryId: 0 },
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
        sx={{ color: "black" }}
      >
        {menu}
        <ExpandMoreIcon />
      </Button>
      <Menu
        style={{
          height: "22rem",
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
            <div key={category.categoryId}>
              <MenuItem onClick={() => changeMenu(category)}>
                {category.topic}
              </MenuItem>
              <hr style={{ margin: "0" }} />
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
