import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { addAdvice } from "../api/postApi";
import { adviceEdit } from "../api/detailApi";
import { useMutation } from "react-query";

import styled from "styled-components";
import { Header5 } from "../elements/Header";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { CategoryDial } from "../elements/MenuDial";
import { ImageModal } from "../components/detailBorad/ImageModal";
import { Container, FlexCenter } from "../shared/css";
import { ErrorAlert } from "../elements/Alert";

function AdvicePost({ resBoard }) {
  const { register, handleSubmit, watch } = useForm();
  const [imagePreview, setImagePreview] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [clicked, setClicked] = useState(false);

  /*데이터 전송 */
  const onSubmit = (e) => {
    if (resBoard === undefined) {
      if (
        categoryId === "" ||
        e.title.trim() === "" ||
        e.content.trim() === ""
      ) {
        return ErrorAlert("게시글 작성을 완료해주세요.");
      } else {
        const formData = new FormData();
        for (let i = 0; i < e.image.length; i++) {
          formData.append(`image`, e.image[i]);
        }
        formData.append("title", e.title);
        formData.append("content", e.content);
        formData.append("categoryId", categoryId);

        writeAdvice.mutate(formData);
        setClicked(true);
      }
    } else {
      if (e.title.trim() === "" || e.content.trim() === "") {
        return ErrorAlert("게시글 작성을 완료해주세요.");
      } else {
        const formData = new FormData();
        for (let i = 0; i < e.image.length; i++) {
          formData.append(`image`, e.image[i]);
        }
        formData.append("title", e.title);
        formData.append("content", e.content);

        EditAdvice.mutate({ formData, adviceId: resBoard?.adviceId });
        setClicked(true);
      }
    }
  };

  const writeAdvice = useMutation(addAdvice);

  //게시글 수정하고 업데이트
  const EditAdvice = useMutation(adviceEdit, {
    onSuccess: () => {
      window.location.reload();
    },
  });

  /*사진 미리보기 */
  const previmg = watch("image");

  useEffect(() => {
    if (previmg && previmg.length > 3) {
      ErrorAlert("사진은 3장만 가능합니다.");
      return;
    }
    if (previmg && previmg.length > 0) {
      let images = [];
      for (let i = 0; i < previmg.length; i++) {
        images.push(URL.createObjectURL(previmg[i]));
        setImagePreview(images);
      }
    }
  }, [previmg]);

  /*사진 삭제 */

  // 모달창 노출 여부 state
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <Header5 title={"고민 적기"} clicked={clicked} />
      <Stcontainer>
        {resBoard === undefined ? (
          <>
            <StLabel>카테고리 선택</StLabel>
            <CategoryDial setCategoryId={setCategoryId} />
          </>
        ) : (
          <div style={{ fontWeight: "700" }}>{resBoard.category}</div>
        )}

        <StLabel style={{ marginTop: "1rem" }}>제목</StLabel>
        <Stinput
          type="text"
          placeholder="제목을 입력해주세요. (30자 이내)"
          maxLength={30}
          defaultValue={resBoard?.title}
          {...register("title")}
        />
        <StLabel style={{ marginTop: "0.5rem" }}>내용</StLabel>
        <Stcontent>
          <StText
            placeholder="내용을 입력해주세요. (500자 이내)"
            defaultValue={resBoard?.content}
            maxLength={500}
            {...register("content")}
          />
          <div className="flexbox">
            <label htmlFor="picture">
              <StUpload>
                <PhotoCameraIcon fontSize="large" />
                <span>{imagePreview.length} / 3</span>
              </StUpload>
            </label>
            <input
              style={{ display: "none" }}
              {...register("image")}
              id="picture"
              type="file"
              multiple
              accept=".jpg, .png"
            />
            {imagePreview.length > 0
              ? imagePreview?.map((img) => {
                  return (
                    <Stprevimg onClick={handle(img)} key={img}>
                      <img className="preimg" src={img} alt="이미지 미리보기" />
                    </Stprevimg>
                  );
                })
              : null}
            {modalOpen && (
              <ImageModal
                modalOpen={modalOpen}
                closeModal={closeModal}
                img={selectImg}
              />
            )}
          </div>
        </Stcontent>
        <StError>업로드 가능한 파일 확장자 : jpg, jpeg, png</StError>
      </Stcontainer>
    </form>
  );
}

export default AdvicePost;

const Stcontainer = styled.div`
  ${Container}
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  padding: ${(props) => props.theme.paddings.xxl};
`;

/*라벨링 */
const StLabel = styled.div`
  margin: 0.5rem 0;
`;

/*제목 */
const Stinput = styled.input`
  width: 100%;
  height: 2.8rem;

  border: none;
  background-color: ${(props) => props.theme.Colors.blueGray1};
  padding: ${(props) => props.theme.paddings.base};
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: ${(props) => props.theme.margins.sm};
`;

/*글 내용 */
const StText = styled.textarea`
  width: 100%;
  height: 14rem;

  border: none;
  background-color: ${(props) => props.theme.Colors.blueGray1};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

/*이미지 업로드 박스*/
const StUpload = styled.div`
  ${FlexCenter};
  flex-direction: column;

  background-color: #8cd3d4;
  width: 4.4rem;
  height: 4.4rem;
  color: #ffffff;
  font-weight: ${(props) => props.theme.fontWeights.xl};
`;

/*이미지 미리보기*/
const Stprevimg = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  background-color: #dee3e3;

  display: flex;
  align-items: center;
`;

/*이미지 업로드 + 글내용  */
const Stcontent = styled.div`
  background-color: ${(props) => props.theme.Colors.blueGray1};
  padding: ${(props) => props.theme.paddings.base};
  /*추가, 옆으로 정렬하기*/
  .flexbox {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const StError = styled.div`
  margin-top: ${(props) => props.theme.margins.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.Colors.gray2};
`;
