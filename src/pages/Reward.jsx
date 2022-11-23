import { rewardGet, rewardNew } from "../api/rewardApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { RewardModal } from "../components/detailBorad/ImageModal";
import { useState } from "react";

function Reward() {
  const { data, isSuccess } = useQuery("rewardGet", rewardGet, {
    refetchOnWindowFocus: false,
  });

  const queryClient = useQueryClient();

  // 보상받기 누르면 리워드로 변경
  const { mutate } = useMutation(rewardNew, {
    onSuccess: () => {
      queryClient.invalidateQueries("rewardGet");
    },
  });

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);
  const [tip, setTip] = useState(null);

  // 모달창 노출
  const handle = (item) => () => {
    showModal();
    setTip(item);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  if (isSuccess) {
    const missionResult = data?.data.result;
    const missionCount = data?.data.missionCount;

    const missions = [
      {
        id: 1,
        complete: missionResult[0]?.isComplete,
        get: missionResult[0]?.isGet,
        mission: [`게시글 작성 ${missionCount?.totalPost}/1`],
      },
      {
        id: 2,
        complete: missionResult[1]?.isComplete,
        get: missionResult[1]?.isGet,
        mission: [
          `골라주기 ${missionCount?.totalChoicePick}/5`,
          `답해주기 ${missionCount?.totalAdviceComment}/2`,
        ],
      },
      {
        id: 3,
        complete: missionResult[2]?.isComplete,
        get: missionResult[2]?.isGet,
        mission: [
          `골라주기 ${missionCount?.totalChoicePick}/10`,
          `답해주기 ${missionCount?.totalAdviceComment}/5`,
        ],
      },
      {
        id: 4,
        complete: missionResult[3]?.isComplete,
        get: missionResult[3]?.isGet,
        mission: [
          `골라주기 ${missionCount?.totalChoicePick}/15`,
          `답해주기 ${missionCount?.totalAdviceComment}/10`,
        ],
      },
      {
        id: 5,
        complete: missionResult[4]?.isComplete,
        get: missionResult[4]?.isGet,
        mission: [`좋아요 받기 ${missionCount?.likeTotal}/5`],
      },
      {
        id: 6,
        complete: missionResult[5]?.isComplete,
        get: missionResult[5]?.isGet,
        mission: [
          `게시글 작성 ${missionCount?.totalPost}/3`,
          `골라주기 ${missionCount?.totalChoicePick}/15`,
          `좋아요 받기 ${missionCount?.likeTotal}/3`,
        ],
      },
      {
        id: 7,
        complete: missionResult[6]?.isComplete,
        get: missionResult[6]?.isGet,
        mission: [`행운의 편지 열기 ${missionCount?.msgOpen}/10`],
      },
      {
        id: 8,
        complete: missionResult[7]?.isComplete,
        get: missionResult[7]?.isGet,
        mission: [`채택받기 ??/3`],
      },
      {
        id: 9,
        complete: missionResult[8]?.isComplete,
        get: missionResult[8]?.isGet,
        mission: [`고민 해결하기 ??/10`],
      },
      //히든 미션 미완
      // { id: 10, mission: [`채택받기 ??/10 `] },
      // { id: 11, mission: [`좋아요 받기 ${missionCount?.likeTotal}/50 `] },
      // { id: 12, mission: [`미션 완료 ??/9 `] },
    ];

    return (
      <>
        <Header4 title={"수집함"} />
        <Stcontainer>
          <StWrap1>
            <span style={{ fontSize: "1.125rem" }}>등급</span>
            <span style={{ fontSize: "1.375rem", fontWeight: "600" }}>
              주니어 해결사
            </span>
          </StWrap1>
          <StWrap2>
            <span style={{ marginRight: "2rem" }}>해결한 고민 수</span>
            <span>??</span>
          </StWrap2>
          <StMissionWrap>
            {missions.map((item) => {
              return item.complete ? (
                <StMissionBox key={item.id}>
                  {item.get ? (
                    <img alt="보상" src="/userpic.png" />
                  ) : (
                    <StClick className="inner" onClick={() => mutate(item.id)}>
                      보상 받기
                    </StClick>
                  )}
                </StMissionBox>
              ) : (
                <StMissionBox key={item.id}>
                  <QuestionMarkIcon
                    className="inner"
                    onClick={handle(item.mission)}
                  />
                </StMissionBox>
              );
            })}
            {modalOpen && (
              <RewardModal
                modalOpen={modalOpen}
                closeModal={closeModal}
                tip={tip}
              />
            )}
          </StMissionWrap>
        </Stcontainer>
        <Footer title={"수집함"} />
      </>
    );
  }

  return;
}
//     <>
//       <Header4 title={"수집함"} />
//       <Stcontainer>
//         <StWrap1>
//           <span style={{ fontSize: "1.125rem" }}>등급</span>
//           <span style={{ fontSize: "1.375rem", fontWeight: "600" }}>
//             주니어 해결사
//           </span>
//         </StWrap1>
//         <StWrap2>
//           <span style={{ marginRight: "2rem" }}>해결한 고민 수</span>
//           <span>??</span>
//         </StWrap2>

//         <StMissionWrap>
//           <StMissionBox>
//             <LockOutlinedIcon className="inner" />
//           </StMissionBox>
//           <StMissionBox>
//             <QuestionMarkIcon className="inner" />
//           </StMissionBox>
//           <StMissionBox></StMissionBox>
//           <StMissionBox>
//             <LockOutlinedIcon className="inner" />
//           </StMissionBox>
//           <StMissionBox>
//             <QuestionMarkIcon className="inner" />
//           </StMissionBox>
//           <StMissionBox></StMissionBox>
//         </StMissionWrap>
//       </Stcontainer>
//       <Footer title={"수집함"} />
//     </>
//   );
// }

export default Reward;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 8rem);
  padding: ${(props) => props.theme.paddings.xl};
`;

/*주니어 해결사 등급*/
const StWrap1 = styled.div`
  height: 3rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75rem;
`;

/*주니어 해결한 고민수*/
const StWrap2 = styled.div`
  background-color: #2764be;
  color: white;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.margins.xl};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.lg};
`;

/*미션 박스 감싸기*/
const StMissionWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const StMissionBox = styled.div`
  background-color: #d6e6e5;
  color: white;
  float: left;
  width: 31.5%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  //작은 화면에서도 1줄에 3개 고정
  @media all and (min-width: 200px) and (max-width: 384px) {
    width: 30%;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .inner {
    position: absolute;
    width: 70%;
    height: 70%;
  }
`;

const StClick = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.sm};
  justify-content: center;
  align-items: center;
`;
