import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
  fontSize: "1rem",
};
const Category = ({ setCategoryId }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* category value 값 담기 */
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
  const categoryChange = (e) => {
    setCategoryId(e.target.value);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        카테고리
        <KeyboardArrowDownIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StBtnWrap id="modal-modal-title" variant="h6" component="h2">
            {categories?.map((category) => (
              <StBtn
                value={category.categoryId}
                key={category.categoryId}
                onClick={categoryChange}
              >
                {category.topic}
              </StBtn>
            ))}
          </StBtnWrap>
        </Box>
      </Modal>
    </div>
  );
};

export default Category;

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
