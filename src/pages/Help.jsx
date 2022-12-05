import React from "react";
import styled from "styled-components";
import { Header1 } from "../elements/Header";
import { Container, FlexCenter } from "../shared/css";

const Help = () => {
  return (
    <>
      <Header1 title={"이용방법"} />
      <Stcontainer>
        <StTitle>메인</StTitle>
        <ul>
          <StLi>- 배너를 클릭하면 원하는 서비스로 이동합니다.</StLi>
          <StLi>- 추천글은 메인페이지 접근 시 랜덤으로 갱신됩니다.</StLi>
          <StLi>- 행운 편지를 클릭하여 기분 좋은 하루를 맞이하세요.</StLi>
          <StLi>- '내가 남긴 고민글'과 '북마크 한 고민글'을 활용해보세요.</StLi>
        </ul>
        <br />
        <StTitle>고민접기</StTitle>
        <ul>
          <StLi>- 하단의 글쓰기 버튼을 클릭하여 고민글을 작성하세요.</StLi>
          <StLi>- 골라주기: 가벼운 고민글은 투표를 통해 해결히세요.</StLi>
          <StLi>- 답해주기: 진중한 고민글은 다양한 의견을 받아보세요.</StLi>
          <StLi>- 토글을 통해 쪽지, 신고, 수정, 삭제 기능을 사용하세요.</StLi>
          <StLi>- 상단의 검색 버튼을 통해 게시글을 검색 해보세요.</StLi>
        </ul>
        <br />
        <StTitle>쪽지함</StTitle>
        <ul>
          <StLi>- 상대에게 쪽지를 보내거나 받으면 쪽지방이 생성돼요.</StLi>
          <StLi>- 쪽지방에 입장하여 실시간으로 쪽지를 주고받아 보세요. </StLi>
          <StLi>- 쪽지방을 나가고싶을 땐 'X' 버튼을 클릭하세요.</StLi>
        </ul>
        <br />
        <StTitle>수집함</StTitle>
        <ul>
          <StLi>- 미션을 확인하여 완료하고 종이접기를 휙득해보세요.</StLi>
          <StLi>- 물음표 박스를 클릭하면 미션을 확인할 수 있어요.</StLi>
          <StLi>- 미션을 많이 클리어할수록 나의 등급이 올라가요.</StLi>
        </ul>
      </Stcontainer>
    </>
  );
};

export default Help;

/*반응형 맞춤 */
const Stcontainer = styled.div`
  ${Container};
  height: calc(100vh - 4rem);
  padding: ${(props) => props.theme.paddings.xxl};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StTitle = styled.div`
  ${FlexCenter};
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin-bottom: 0.3rem;
  width: 100%;
  height: 2rem;
  background-color: ${(props) => props.theme.Colors.blueGray1};
`;

const StLi = styled.li`
  line-height: 1.5rem;
`;
