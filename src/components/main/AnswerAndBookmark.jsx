import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";

const AnswerAndBookmark = () => {
  const lists = [
    { title: "답변을 기다리고 있는 내 고민" },
    { title: "북마크 한 고민" },
  ];

  return (
    <>
      {lists.map((list) => (
        <StContainer>
          {list.title}
          <KeyboardArrowRightIcon />
        </StContainer>
      ))}
    </>
  );
};

export default AnswerAndBookmark;

const StContainer = styled.div`
  background-color: #f4f2fb;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem ${(props) => props.theme.paddings.xsm};
  margin-bottom: ${(props) => props.theme.margins.xsm};
`;
