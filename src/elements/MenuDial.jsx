import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

//투표 정렬 필터
/*최신순, 참여자순, 마감임박순*/
export function MenuDial0() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("최신순");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setMenu(e);
  };

  const list = ["최신순", "참여자순", "마감임박"];

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
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {list.map((item) => {
          return (
            <MenuItem onClick={() => handleClose(item)} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </StDiv>
  );
}

//투표 점
/*삭제,수정, 투표종료*/
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
        sx={{ color: "black" }}
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
        <MenuItem onClick={handleClose}>삭제</MenuItem>
        <MenuItem onClick={handleClose}>수정</MenuItem>
        <MenuItem onClick={handleClose}>투표종료</MenuItem>
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
  const handleClose = (e) => {
    setAnchorEl(null);
    setMenu(e);
  };

  const list = ["최신순", "조회순", "댓글순"];

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
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {list.map((item) => {
          return (
            <MenuItem onClick={() => handleClose(item)} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </StDiv>
  );
}

//게시판 상세페이지 게시글, 댓글
/*남 : 쪽지하기, 신고하기*/
/*본인 : 수정, 삭제 */
export function MenuDial3() {
  const [anchorEl, setAnchorEl] = useState(null);
  //유저 판단하기
  // const user = false;
  const user = true;
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
        sx={{ color: "black" }}
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
          <MenuItem onClick={handleClose}>쪽지하기</MenuItem>
          <MenuItem onClick={handleClose}>신고하기</MenuItem>
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
          <MenuItem onClick={handleClose}>수정</MenuItem>
          <MenuItem onClick={handleClose}>삭제</MenuItem>
        </Menu>
      )}
    </StDiv>
  );
}

//게시판 상세페이지 댓글 정렬 필터
/*최신순, 좋아요순*/
export function MenuDial4() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState("최신순");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setMenu(e);
  };

  const list = ["최신순", "좋아요순"];

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
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {list.map((item) => {
          return (
            <MenuItem onClick={() => handleClose(item)} key={item}>
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
