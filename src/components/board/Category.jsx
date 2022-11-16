import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

/* css관련 */
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "1rem",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* category value 값 담기 */
  const [categoryValue, setCategoryValue] = useState("");
  const categories = [
    "여행",
    "진로",
    "쇼핑",
    "연애",
    "친구",
    "반려동물",
    "선물",
    "건강",
    "코디",
    "육아",
    "생활",
    "기타",
  ];

  return (
    <div>
      <Button onClick={handleOpen}>카테고리</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StBtnWrap id="modal-modal-title" variant="h6" component="h2">
            {categories.map((category) => (
              <StBtn value={category} key={category}>
                {category}
              </StBtn>
            ))}
          </StBtnWrap>
        </Box>
      </Modal>
    </div>
  );
}

const StBtnWrap = styled(Typography)`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  row-gap: ${(props) => props.theme.margins.sm};
`;

const StBtn = styled.button`
  width: 5rem;
  height: 2rem;
  &:active {
    background-color: ${(props) => props.theme.boxColors.gray1};
  }
`;
