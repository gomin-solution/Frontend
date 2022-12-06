import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { recommentPost } from "../../api/detailApi";
import { OkayAlert } from "../../elements/Alert";
import { userKeyAtom } from "../../state/atom";

function DetailReCommentInput({ setRecomment, commentId }) {
  const queryClient = useQueryClient();
  const userKey = useRecoilValue(userKeyAtom);
  //댓글 달기
  const { register, handleSubmit, reset } = useForm();
  const onRecomment = (comment) => {
    if (!userKey) {
      OkayAlert("로그인 후 이용해주세요.");
      reset();
    } else {
      if (comment.re.trim() === "") {
        return OkayAlert("댓글을 입력해주세요.");
      } else {
        writeComment.mutate({ commentId: commentId, comment });
        reset();
      }
    }
  };

  const writeComment = useMutation(recommentPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("getRecomment");
    },
  });

  return (
    <StcommentBox as="form" onSubmit={handleSubmit(onRecomment)}>
      <div className="inputBox">
        <input
          placeholder="답글을 입력해주세요. (50자 이내)"
          maxLength={50}
          {...register("re")}
        />
        <StCommentDiv>
          <button type="button" onClick={() => setRecomment(false)}>
            취소
          </button>
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
    margin-left: 1rem;
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
