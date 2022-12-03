import ClearIcon from "@mui/icons-material/Clear";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { FlexCenter } from "../../shared/css";

export function ImageModal({ modalOpen, closeModal, img }) {
  return (
    <div>
      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
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

/*리워드 미션 모달 */
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
            <div className="title">
              미션
              <ClearIcon className="close" onClick={closeModal} />
            </div>
            {tip.map((item) => (
              <MissionDiv
                key={item}
                finshi={item.split("-")[1] / item.split("-")[2]}
              >
                <div className="set">
                  <div className="missionTitle">{item.split("-")[0]}</div>
                  <div className="missionPer">
                    {item.split("-")[1]}/{item.split("-")[2]}
                  </div>
                </div>
                <MissionGauge>
                  <MissionBar
                    width={Math.round(
                      (item.split("-")[1] / item.split("-")[2]) * 100
                    )}
                  />
                </MissionGauge>
              </MissionDiv>
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
  height: 50%;
  background-color: ${(props) => props.theme.Colors.bg1};

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.Colors.blueGreen3};

    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: ${(props) => props.theme.fontWeights.lg};
    color: ${(props) => props.theme.Colors.blueGreen3};

    padding: ${(props) => props.theme.paddings.lg};
    ${FlexCenter}
    .close {
      width: 1.5rem;
      position: absolute;
      right: 1rem;
      color: ${(props) => props.theme.Colors.blueGreen3};
    }
  }
`;

const MissionDiv = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.Colors.blueGreen3};
  padding: ${(props) => props.theme.paddings.lg};
  background-color: ${(props) => props.finshi === 1 && "#E9F3F2"};

  .set {
    display: flex;
    justify-content: space-between;
  }
  .missionTitle {
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: ${(props) => props.theme.fontWeights.lg};
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
  .missionPer {
    font-weight: ${(props) => props.theme.fontWeights.lg};
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
`;

/*미션 게이지바*/
const MissionGauge = styled.div`
  position: relative;
  height: 0.7rem;
  margin-top: ${(props) => props.theme.margins.xxsm};
  background-color: ${(props) => props.theme.Colors.gray1};
`;
/*미션 바*/
const MissionBar = styled.div`
  position: absolute;
  height: 0.7rem;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.theme.Colors.blueGreen3};
`;

/*리워드 달성 모달 */
export function RewardGetModal({ modalOpen, closeModal, reward }) {
  return (
    <div>
      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
      >
        <StBack>
          <ClearIcon className="clear" onClick={closeModal} />
          <StCollect>
            <p className="title">컬렉션 획득</p>
            <img alt="" src={reward.img} />
            <p className="text">하트루비</p>
          </StCollect>
        </StBack>
      </Modal>
    </div>
  );
}

const StCollect = styled.div`
  width: 80%;
  height: 100%;
  color: #ffffff;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 70%;
    margin: 1rem 0;
  }

  .title {
    font-size: 2rem;
    font-weight: ${(props) => props.theme.fontWeights.xl};
  }

  .text {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

/*이미지 미리보기 크게 */
const StBack = styled.div`
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

  background-color: rgba(0, 0, 0, 0.797);
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
