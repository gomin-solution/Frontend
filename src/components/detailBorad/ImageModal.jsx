import ClearIcon from "@mui/icons-material/Clear";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

export default function ImageModal({ modalOpen, closeModal, img }) {
  return (
    <div>
      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StBigPrev>
          <ClearIcon className="clear" onClick={closeModal} />
          <img className="bigImg" src={img} alt="이미지 미리보기" />
        </StBigPrev>
      </Modal>
    </div>
  );
}

/*이미지 미리보기 크게 */
const StBigPrev = styled.div`
  @media all and (min-width: 26rem) {
    max-width: 26rem;
  }

  z-index: 100;
  width: 100%;
  height: 100%;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.8);
  display: flex;

  .clear {
    position: absolute;
    z-index: 102;

    color: #ffffff;
    cursor: pointer;
    top: 1rem;
    right: 1rem;
  }
`;
