import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { FlexCenter } from "../../shared/css";

function PrevImage({ idx, img, handle, imgCancle }) {
  return (
    <Stprevimg onClick={handle(img)}>
      <StClose onClick={(e) => imgCancle(e, idx)}>
        <CloseIcon sx={{ fontSize: "1rem" }} />
      </StClose>
      <img className="preimg" src={img} alt="이미지 미리보기" />
    </Stprevimg>
  );
}

export default PrevImage;

/*이미지 미리보기*/
const Stprevimg = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  background-color: #dee3e3;

  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;
`;

const StClose = styled.div`
  ${FlexCenter}

  color: #ffffff;
  background-color: #8cd3d4;
  aspect-ratio: 1/1;
  border-radius: 50%;
  position: absolute;

  top: -0.5rem;
  right: -0.5rem;
  width: 1.5rem;
`;
