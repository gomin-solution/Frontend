import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { adviceDelete, commentDelete } from "../api/detailApi";
import { useNavigate } from "react-router-dom";

//투표 정렬 필터
/*최신순, 참여자순, 마감임박순*/
export function MenuDial0() {
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
  const list = ["최신순", "참여자순", "마감임박"];
  const changeMenu = (e) => {
    setMenu(e);
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
        {list.map((item) => {
          return (
            <MenuItem onClick={() => changeMenu(item)} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </StDiv>
  );
}

//투표 점
/*삭제, 투표종료*/
export function MenuDial1() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
        <MenuItem>삭제</MenuItem>
        <MenuItem>투표종료</MenuItem>
      </Menu>
    </StDiv>
  );
}

//게시판 정렬 필터
/*최신순, 조회순, 댓글순 */
export function MenuDial2() {
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
  const list = ["최신순", "조회순", "댓글순"];
  const changeMenu = (e) => {
    setMenu(e);
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
        {list.map((item) => {
          return (
            <MenuItem onClick={() => changeMenu(item)} key={item}>
              {item}
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
  const list = ["등록순", "좋아요순"];
  const changeMenu = (e) => {
    setMenu(e);
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
        {list.map((item) => {
          return (
            <MenuItem onClick={() => changeMenu(item)} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </StDiv>
  );
}

const StDiv = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

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
