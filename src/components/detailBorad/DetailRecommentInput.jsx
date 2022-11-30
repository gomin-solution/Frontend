import styled from "styled-components";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

function DetailReCommentInput() {
  return (
    <StcommentBox>
      <SubdirectoryArrowRightIcon sx={{ color: "#19696A" }} />
      <div className="inputBox">
        <input placeholder="답글을 입력해주세요. (50자 이내)" maxLength={50} />
        <StCommentDiv>
          <button>취소</button>
          <button>작성</button>
        </StCommentDiv>
      </div>
    </StcommentBox>
  );
}

export default DetailReCommentInput;

/*댓글 박스 */
const StcommentBox = styled.div`
  padding: ${(props) => props.theme.paddings.base} 0;
  margin-bottom: ${(props) => props.theme.margins.xxsm};

  display: flex;

  //답글버튼
  button {
    font-weight: ${(props) => props.theme.fontWeights.xl};
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
  input {
    margin-left: 0.2rem;
    background-color: ${(props) => props.theme.Colors.bg3};
    padding: ${(props) => props.theme.paddings.xsm};
    border: none;
  }

  .inputBox {
    width: 100%;
    flex-direction: column;
    display: flex;
  }
`;

const StCommentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.2rem;
`;
