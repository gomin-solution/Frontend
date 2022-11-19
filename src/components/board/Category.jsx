import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

/* css관련 */
import styled from "styled-components";

const Category = ({ setCategoryId }) => {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("전체");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* category value 값 담기 */
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
  const categoryChange = (topic, categoryId) => {
    setTopic(topic);
    setCategoryId(categoryId);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        {topic}
        <KeyboardArrowDownIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StBox>
          <StTopWrap>
            <div>카테고리 선택</div>
            <StClose onClick={handleClose}>
              <CloseIcon />
            </StClose>
          </StTopWrap>
          <StBtnWrap>
            {categories?.map((category) => (
              <StBtn
                value={category.categoryId}
                key={category.categoryId}
                onClick={() =>
                  categoryChange(category.topic, category.categoryId)
                }
              >
                {category.topic}
              </StBtn>
            ))}
          </StBtnWrap>
        </StBox>
      </Modal>
    </div>
  );
};

export default Category;

const StBox = styled.div`
  background-color: white;
  position: absolute;
  top: 21.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16rem;
  height: 22rem;
  font-size: 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: #adadad;
  }
  &::-webkit-scrollbar-thumb {
    background: #ecc5c5;
    border-radius: 6px;
  }
`;

const StTopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: ${(props) => props.theme.margins.sm};
`;

const StClose = styled.div`
  position: absolute;
  right: 0;
`;

const StBtnWrap = styled(Typography)`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  row-gap: ${(props) => props.theme.margins.xsm};
`;

const StBtn = styled.button`
  width: 100%;
  height: 2rem;
  &:active {
    background-color: ${(props) => props.theme.boxColors.gray1};
  }
`;
