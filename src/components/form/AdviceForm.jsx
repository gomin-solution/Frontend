import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Btn1 } from "../../elements/Btn";
import styled from "styled-components";
import { Switch } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import { addAdvice } from "../../api/postApi";
import { useMutation } from "react-query";

function AdviceForm({ cate }) {
  const nav = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const [imagePreview, setImagePreview] = useState("");

  /*데이터 전송 */
  const onSubmit = (e) => {
    const formData = new FormData();
    for (let i = 0; i < e.image.length; i++) {
      formData.append(`image`, e.image[i]);
    }
    formData.append("title", e.title);
    formData.append("content", e.content);
    formData.append("isAdult", e.isAdult);
    formData.append("categoryId", cate.categoryId);

    wrtieAdvice.mutate(formData);
    nav("/board");
  };

  const wrtieAdvice = useMutation(addAdvice);

  /*사진 미리보기 */
  const previmg = watch("image");

  useEffect(() => {
    if (previmg && previmg.length > 0) {
      let images = [];
      for (let i = 0; i < previmg.length; i++) {
        images.push(URL.createObjectURL(previmg[i]));
        setImagePreview(images);
      }
    }
  }, [previmg]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <StCate>{cate.topic}</StCate>
      <Stinput
        type="text"
        placeholder="제목을 입력해주세요."
        required
        {...register("title")}
      />
      <Stcontent>
        <StText
          placeholder="내용을 입력해주세요."
          required
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
          />

          {imagePreview.length > 0
            ? imagePreview?.map((img) => {
                return (
                  <Stprevimg key={img}>
                    <img
                      style={{ width: "4.4rem" }}
                      src={img}
                      alt="이미지 미리보기"
                    />
                  </Stprevimg>
                );
              })
            : null}
        </div>
      </Stcontent>
      <StAdult>참여자 연령선택</StAdult>
      <StCheckAdult>
        <span style={{ marginRight: "2rem" }}>성인에게만 공개</span>
        <Switch
          sx={{
            width: 80,
            height: 47,
            "& .MuiSwitch-thumb": { width: 38, borderRadius: 3, height: 22 },
            "& .MuiSwitch-track": {
              borderRadius: 3,
              marginTop: -0.4,
            },
          }}
          {...register("isAdult")}
        />
      </StCheckAdult>
      <Btn1 text={"완료"} />
    </form>
  );
}

export default AdviceForm;

/*카테고리 박스 */
const StCate = styled.div`
  width: 100%;
  height: 1.8rem;
  font-size: ${(props) => props.theme.fontSizes.sm};

  display: flex;
  justify-content: center;
  align-items: center;
`;

/*제목 */
const Stinput = styled.input`
  width: 100%;
  height: 2.8rem;

  border: none;
  background-color: ${(props) => props.theme.boxColors.gray1};
  padding: ${(props) => props.theme.paddings.base};
  margin: ${(props) => props.theme.margins.lg} 0rem;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

/*글 내용 */
const StText = styled.textarea`
  width: 100%;
  height: 16rem;
  margin-bottom: ${(props) => props.theme.margins.sm};

  border: none;
  background-color: ${(props) => props.theme.boxColors.gray1};
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
