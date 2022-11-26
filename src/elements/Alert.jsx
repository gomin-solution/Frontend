import Modal from "@mui/material/Modal";
import styled from "styled-components";
import Swal from "sweetalert2";

/* 버튼 1개 and 확인 후 이동 X */
export const Alert0 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonText: "확인",
    confirmButtonColor: "#6D6D6D",
    width: "20rem",
  });
};

/* 로그인 성공 */
export const Alert1 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonText: "확인",
    confirmButtonColor: "#6D6D6D",
    width: "20rem",
  }).then(() => {
    window.location.href = "/";
  });
};

/* 네 or 아니오 */
export const Alert2 = (text) => {
  Swal.fire({
    text: text,
    showCancelButton: true,
    confirmButtonText: "네",
    cancelButtonText: "아니오",
    confirmButtonColor: "#6D6D6D",
    cancelButtonColor: "#6D6D6D",
    width: "20rem",
  });
};

/* 회원가입 성공 */
export const Alert3 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonText: "확인",
    confirmButtonColor: "#e20606",
    width: "20rem",
  }).then(() => {
    window.location.replace("/login");
  });
};

/* 로그인 후 이용해주세요. */
export const Alert4 = (text) => {
  Swal.fire({
    text: text,
    confirmButtonText: "확인",
    confirmButtonColor: "#6D6D6D",
    width: "20rem",
  });
};

/*리워드 모달 */
export function RewardModal({ modalOpen, closeModal, tip }) {
  return (
    <div>
      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
      >
        <StBigPrev>
          <StTip>
            {tip.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </StTip>
        </StBigPrev>
      </Modal>
    </div>
  );
}

/*팁 띄우기*/
const StTip = styled.div`
  width: 80%;
  height: 30%;
  background-color: #ffffff;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1rem;

  div {
    font-size: 1.5rem;
  }
`;

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

  background-color: rgba(0, 0, 0, 0.6);
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
