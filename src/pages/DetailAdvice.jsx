import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { adviceBookmark, commentAdvice, adviceDetail } from "../api/detailApi";
import { decodeCookie, getCookie } from "../api/cookie";

import styled from "styled-components";
import DetailComment from "../components/detailBorad/DetailComment";
import ImageModal from "../components/detailBorad/ImageModal";
import { Header1 } from "../elements/Header";
import { MenuDial3, MenuDial4 } from "../elements/MenuDial";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useForm } from "react-hook-form";

function DetailAdvice() {
  const queryClient = useQueryClient();

  const param = useParams();
  const adviceId = param.adviceId;

  //상세페이지 정보 가져오기
  const { data } = useQuery(
    ["getDetail", adviceId],
    () => adviceDetail(adviceId),
    {
      refetchOnWindowFocus: false,
    }
  );

  const resBoard = data?.data.data;
  const resComment = data?.data.data.comment;
  const [user, setUser] = useState(false);

  //북마크 실행,취소
  const { mutate } = useMutation(adviceBookmark, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
    },
  });

  //댓글 작성
  const { register, handleSubmit, reset } = useForm();

  const onSubmitComment = (comment) => {
    adviceComment.mutate({ adviceId: adviceId, comment });
    reset();
  };

  const adviceComment = useMutation(commentAdvice, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDetail");
    },
  });

  const adviceCategory = [
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

  // 이미지 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectImg, setSelectImg] = useState(null);

  // 모달창 노출
  const handle = (img) => () => {
    showModal();
    setSelectImg(img);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const decodeKey = decodeCookie("accessToken").userKey;
  //토큰 디코딩해서 비교
  useEffect(() => {
    if (getCookie("accessToken") !== undefined) {
      if (decodeKey === resBoard?.userKey) {
        setUser(true);
      }
    }
  }, [resBoard, decodeKey]);

  return (
    <>
      <Header1 title={"고민 적기"} />
      <Stcontainer>
        <StUser>
          <img src={resBoard?.userImage} alt="" className="userimg" />
          <p>{resBoard?.nickname}</p>
          <StMenu>
            {!resBoard?.isBookMark ? (
              <BookmarkBorderIcon
                style={{ cursor: "pointer", marginRight: "0.5rem" }}
                onClick={() => mutate(resBoard?.adviceId)}
              />
            ) : (
              <BookmarkIcon
                style={{ cursor: "pointer", marginRight: "0.5rem" }}
                onClick={() => mutate(resBoard?.adviceId)}
              />
            )}
            <MenuDial3 user={user} />
          </StMenu>
        </StUser>
        <StBoardBox>
          <span style={{ fontWeight: "800" }}>
            [{adviceCategory[resBoard?.categoryId - 1]?.topic}]
          </span>
          <span style={{ marginLeft: "0.5rem" }}>{resBoard?.title}</span>
          <p>{resBoard?.content}</p>
          <StImgBox>
            {resBoard?.adviceImage.map((img) => {
              return (
                <img
                  key={img}
                  alt="업로드사진"
                  src={img[1]}
                  style={{ maxWidth: "7rem", maxHeight: "7rem" }}
                  onClick={handle(img[1])}
                />
              );
            })}
          </StImgBox>
          {modalOpen && (
            <ImageModal
              modalOpen={modalOpen}
              closeModal={closeModal}
              img={selectImg}
            />
          )}
          <StBoxInfo>
            <p>조회 {resBoard?.viewCount}</p>
            <p style={{ position: "absolute", right: "1.5rem" }}>
              {resBoard?.createdAt}
            </p>
          </StBoxInfo>
        </StBoardBox>
        <StCommentSet>
          <p>답변 {resBoard?.commentCount}</p>

          <MenuDial4 />
        </StCommentSet>
        {resComment?.map((comment) => {
          return (
            <DetailComment
              key={comment.commentId}
              comment={comment}
              decodeKey={decodeKey}
            />
          );
        })}
      </Stcontainer>
      <StCommentform onSubmit={handleSubmit(onSubmitComment)}>
        <input
          type="text"
          required
          {...register("comment")}
          placeholder="답변해주기"
        />
        <button>
          <SendOutlinedIcon />
        </button>
      </StCommentform>
    </>
  );
}

export default DetailAdvice;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);
  padding: ${(props) => props.theme.paddings.xxl};
`;

/*유저정보 */
const StUser = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  p {
    margin-left: ${(props) => props.theme.margins.sm};
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

/*메뉴 위치조정 */
const StMenu = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 2rem;
`;

/*글 내용 박스 */
const StBoardBox = styled.div`
  span {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
    margin: ${(props) => props.theme.margins.sm} 0;
  }
`;

/*이미지 정렬 박스 */
const StImgBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 1.8rem;
`;

/*하단 글 정보*/
const StBoxInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.xsm};
  border-bottom: 1px solid ${(props) => props.theme.boxColors.gray3};
`;

/*하단 댓글 정보 */
const StCommentSet = styled.div`
  p {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
  display: flex;
  align-items: center;
  margin: 1rem 0;
  justify-content: space-between;
`;

const StCommentform = styled.form`
  width: 100%;
  height: 3rem;
  padding: 1rem 0.6rem;

  position: absolute;
  bottom: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #dce7e7;
  border: none;

  input {
    border: none;
    width: 100%;
    background-color: transparent;
  }
  button {
    display: flex;
  }
`;
