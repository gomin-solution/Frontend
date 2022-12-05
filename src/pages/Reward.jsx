import { useState } from "react";
import { rewardGet, rewardNew } from "../api/rewardApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { Header4 } from "../elements/Header";
import Loading from "../components/Loading";
import styled from "styled-components";
import Footer from "../elements/Footer";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import {
  RewardGetModal,
  RewardModal,
} from "../components/detailBorad/ImageModal";
import { RewardedAlert } from "../elements/Alert";
import { Container, FlexCenter } from "../shared/css";

import graphic_fox from "../image/reward/graphic_fox.svg";
import graphic_rabbit from "../image/reward/graphic_rabbit.svg";
import graphic_bear from "../image/reward/graphic_bear.svg";
import graphic_turtle from "../image/reward/graphic_turtle.svg";
import graphic_elephant from "../image/reward/graphic_elephant.svg";
import graphic_dolphin from "../image/reward/graphic_dolphin.svg";
import graphic_cat from "../image/reward/graphic_cat.svg";
import graphic_owl from "../image/reward/graphic_owl.svg";
import graphic_crane from "../image/reward/graphic_crane.svg";

import graphic_star from "../image/reward/graphic_star.png";
import graphic_heart from "../image/reward/graphic_heart.png";
import graphic_clover from "../image/reward/graphic_clover.png";

const Reward = () => {
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
  const [rewardOpen, setRewardOpen] = useState(false);
  const [tip, setTip] = useState(null);
  const [reward, setReward] = useState(null);

  // 미션 모달창
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

  //리워드 달성 모달
  const handleReward = (item) => () => {
    showReward();
    setReward(item);
    mutate(item.id);
  };

  const closeReward = () => {
    setRewardOpen(false);
  };

  const showReward = () => {
    setRewardOpen(true);
  };

  if (isSuccess) {
    const missionResult = data?.data.result;
    const missionCount = data?.data.missionCount;

    const missions = [
      {
        id: 1,
        complete: missionResult[0].isComplete,
        get: missionResult[0].isGet,
        pharse: missionResult[0].pharse,
        rewardName: missionResult[0].rewardName,
        mission: [`게시글 작성-${missionCount?.totalPost}-1`],
        img: graphic_fox,
      },
      {
        id: 2,
        complete: missionResult[1].isComplete,
        get: missionResult[1].isGet,
        pharse: missionResult[1].pharse,
        rewardName: missionResult[1].rewardName,
        mission: [
          `골라주기-${missionCount?.totalChoicePick}-5`,
          `답해주기-${missionCount?.totalAdviceComment}-3`,
        ],
        img: graphic_rabbit,
      },
      {
        id: 3,
        complete: missionResult[2].isComplete,
        get: missionResult[2].isGet,
        pharse: missionResult[2].pharse,
        rewardName: missionResult[2].rewardName,
        mission: [
          `골라주기-${missionCount?.totalChoicePick}-10`,
          `답해주기-${missionCount?.totalAdviceComment}-5`,
        ],
        img: graphic_bear,
      },
      {
        id: 4,
        complete: missionResult[3].isComplete,
        get: missionResult[3].isGet,
        pharse: missionResult[3].pharse,
        rewardName: missionResult[3].rewardName,
        mission: [
          `골라주기-${missionCount?.totalChoicePick}-15`,
          `답해주기-${missionCount?.totalAdviceComment}-10`,
          `게시글 작성-${missionCount?.totalPost}-5`,
        ],
        img: graphic_turtle,
      },
      {
        id: 5,
        complete: missionResult[4].isComplete,
        get: missionResult[4].isGet,
        pharse: missionResult[4].pharse,
        rewardName: missionResult[4].rewardName,
        mission: [
          `좋아요 받기-${missionCount?.likeTotal}-5`,
          `고민해결 선택받기-${missionCount?.Selected}-2`,
        ],
        img: graphic_elephant,
      },
      {
        id: 6,
        complete: missionResult[5].isComplete,
        get: missionResult[5].isGet,
        pharse: missionResult[5].pharse,
        rewardName: missionResult[5].rewardName,
        mission: [
          `게시글 작성-${missionCount?.totalPost}-10`,
          `골라주기-${missionCount?.totalChoicePick}-25`,
          `좋아요 받기-${missionCount?.likeTotal}-10`,
        ],
        img: graphic_dolphin,
      },
      {
        id: 7,
        complete: missionResult[6].isComplete,
        get: missionResult[6].isGet,
        pharse: missionResult[6].pharse,
        rewardName: missionResult[6].rewardName,
        mission: [`행운의 편지 열기-${missionCount?.msgOpen}-10`],
        img: graphic_cat,
      },
      {
        id: 8,
        complete: missionResult[7].isComplete,
        get: missionResult[7].isGet,
        pharse: missionResult[7].pharse,
        rewardName: missionResult[7].rewardName,
        mission: [`고민해결 채택받기-${missionCount?.Selected}-5`],
        img: graphic_owl,
      },
      {
        id: 9,
        complete: missionResult[8].isComplete,
        get: missionResult[8].isGet,
        pharse: missionResult[8].pharse,
        rewardName: missionResult[8].rewardName,
        mission: [`고민해결 하기-${missionCount?.totalSolution}-5`],
        img: graphic_crane,
      },
      {
        id: 10,
        complete: missionResult[9].isComplete,
        get: missionResult[9].isGet,
        pharse: missionResult[9].pharse,
        rewardName: missionResult[9].rewardName,
        mission: [`고민해결 채택받기-${missionCount?.Selected}-10`],
        img: graphic_star,
      },
      {
        id: 11,
        complete: missionResult[10].isComplete,
        get: missionResult[10].isGet,
        pharse: missionResult[10].pharse,
        rewardName: missionResult[10].rewardName,
        mission: [`좋아요 받기-${missionCount?.likeTotal}-50`],
        img: graphic_heart,
      },
      {
        id: 12,
        complete: missionResult[11].isComplete,
        get: missionResult[11].isGet,
        pharse: missionResult[11].pharse,
        rewardName: missionResult[11].rewardName,
        mission: [`미션 완료-${missionCount?.missionComplete}-9`],
        img: graphic_clover,
      },
    ];

    return (
      <>
        <Header4 title={"수집함"} />
        <Stcontainer>
          <StWrap1>
            <span style={{ fontSize: "1.1rem" }}>등급</span>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "#19696A",
              }}
            >
              주니어 해결사
            </span>
          </StWrap1>
          <StWrap2>
            <span style={{ marginRight: "2rem" }}>해결한 고민 수</span>
            <span>{missionCount?.totalSolution}</span>
          </StWrap2>
          <StMissionWrap>
            {missions.map((item) => {
              return item.complete ? (
                <StMissionBox key={item.id}>
                  {item.get ? (
                    <div className="collect">
                      <img
                        alt="보상"
                        src={item?.img}
                        onClick={() => RewardedAlert(item)}
                      />
                    </div>
                  ) : (
                    <div className="rewardGet">
                      <StClick onClick={handleReward(item)}>보상 받기</StClick>
                      {item.id > 9 ? (
                        <LockOutlinedIcon
                          className="inner"
                          onClick={handle(item.mission)}
                        />
                      ) : (
                        <QuestionMarkIcon
                          className="inner"
                          onClick={handle(item.mission)}
                        />
                      )}
                    </div>
                  )}
                </StMissionBox>
              ) : (
                <StMissionBox key={item.id}>
                  {item.id > 9 ? (
                    <LockOutlinedIcon
                      className="inner"
                      onClick={handle(item.mission)}
                    />
                  ) : (
                    <QuestionMarkIcon
                      className="inner"
                      onClick={handle(item.mission)}
                    />
                  )}
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
            {rewardOpen && (
              <RewardGetModal
                modalOpen={rewardOpen}
                closeModal={closeReward}
                reward={reward}
              />
            )}
          </StMissionWrap>
        </Stcontainer>
        <Footer title={"수집함"} />
      </>
    );
  }

  return <Loading />;
};

export default Reward;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  ${Container};
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
  background-color: ${(props) => props.theme.Colors.blueGreen3};
  color: #ffffff;
  height: 4rem;
  ${FlexCenter};
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
  color: #ffffff;
  float: left;
  width: 31.5%;
  position: relative;

  ${FlexCenter};

  //작은 화면에서도 1줄에 3개 고정
  @media all and (min-width: 200px) and (max-width: 384px) {
    width: 30%;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  //리워드 얻기 버튼
  .rewardGet {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.Colors.blueGreen3};

    ${FlexCenter};
    color: #d6e6e584;
  }
  //리워드 획득
  .collect {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fcfcfb;
    ${FlexCenter};
    color: #d6e6e584;
  }

  .inner {
    position: absolute;
    width: 70%;
    height: 70%;
  }

  img {
    width: 90%;
  }
`;

const StClick = styled.div`
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;

  font-size: ${(props) => props.theme.fontSizes.xl};
  @media all and (max-width: 300px) {
    font-size: 90%;
  }
  font-weight: ${(props) => props.theme.fontWeights.lg};
  ${FlexCenter};
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.15);
`;
