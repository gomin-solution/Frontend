import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import styled from "styled-components";
import { Switch } from "@mui/material";
import { Header5 } from "../elements/Header";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ImageModal from "../components/detailBorad/ImageModal";

import { addAdvice } from "../api/postApi";
import { useMutation } from "react-query";
import { MenuDial7 } from "../elements/MenuDial";

function AdvicePost({ resBoard }) {
  const { register, handleSubmit, watch } = useForm();
  const [imagePreview, setImagePreview] = useState("");
  const [categoryId, setCategoryId] = useState("");
  console.log(categoryId);

  /*데이터 전송 */
  const onSubmit = (e) => {
    if (categoryId === "") {
      return alert("카테고리를 선택해주세요.");
    } else {
      const formData = new FormData();
      for (let i = 0; i < e.image.length; i++) {
        formData.append(`image`, e.image[i]);
      }
      formData.append("title", e.title);
      formData.append("content", e.content);
      formData.append("isAdult", e.isAdult);
      formData.append("categoryId", categoryId);

      wrtieAdvice.mutate(formData);
    }
  };

  const wrtieAdvice = useMutation(addAdvice);

  /*사진 미리보기 */
  const previmg = watch("image");

  useEffect(() => {
    if (previmg && previmg.length > 3) {
      alert("사진은 3장만 가능합니다.");
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
      <Header5 title={"고민 적기"} />
      <Stcontainer>
        <StLabel>카테고리 선택</StLabel>
        <MenuDial7 setCategoryId={setCategoryId} />
        <StLabel style={{ marginTop: "1rem" }}>제목</StLabel>
        <Stinput
          type="text"
          placeholder="제목을 입력해주세요. (30자 이내)"
          required
          maxLength={30}
          {...register("title")}
        />
        <StLabel style={{ marginTop: "0.5rem" }}>내용</StLabel>
        <Stcontent>
          <StText
            placeholder="내용을 입력해주세요. (500자 이내)"
            required
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
              accept=".gif, .jpg, .png"
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
        <StAdult>참여자 연령선택</StAdult>
        <StCheckAdult>
          <span style={{ marginRight: "2rem" }}>성인에게만 공개</span>
          <Switch
            sx={{
              width: 80,
              height: 47,
              "& .MuiSwitch-thumb": {
                width: 38,
                borderRadius: 3,
                height: 22,
              },
              "& .MuiSwitch-track": {
                borderRadius: 3,
                marginTop: -0.4,
              },
            }}
            {...register("isAdult")}
          />
        </StCheckAdult>
      </Stcontainer>
    </form>
  );
}

export default AdvicePost;

const Stcontainer = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  position: absolute;
  overflow-y: scroll;
  padding: ${(props) => props.theme.paddings.xxl};
`;

/*라벨링 */
const StLabel = styled.div`
  margin-bottom: 0.4rem;
  font-size: ${(props) => props.theme.fontSizes.base};
`;

/*제목 */
const Stinput = styled.input`
  width: 100%;
  height: 2.8rem;

  border: none;
  background-color: ${(props) => props.theme.boxColors.gray1};
  padding: ${(props) => props.theme.paddings.base};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

/*글 내용 */
const StText = styled.textarea`
  width: 100%;
  height: 14rem;
  margin-bottom: ${(props) => props.theme.margins.sm};

  border: none;
  background-color: ${(props) => props.theme.boxColors.gray1};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

/*이미지 업로드 박스*/
const StUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.boxColors.gray2};
  width: 4.4rem;
  height: 4.4rem;
  color: #ffffff;
  font-weight: ${(props) => props.theme.fontWeights.xl};
`;

/*이미지 미리보기*/
const Stprevimg = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  background-color: #ffffff;

  display: flex;
  align-items: center;
`;

/*이미지 업로드 + 글내용  */
const Stcontent = styled.div`
  background-color: ${(props) => props.theme.boxColors.gray1};
  padding: ${(props) => props.theme.paddings.base};
`;

/*연령확인 텍스트 */
const StAdult = styled.p`
  margin-top: 2.5rem;
  font-size: ${(props) => props.theme.fontSizes.base};
`;

/*스위치 버튼 + 텍스트 묶가 */
const StCheckAdult = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: 1.5rem;
`;
