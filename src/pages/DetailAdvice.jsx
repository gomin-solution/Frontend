import styled from "styled-components";
import DetailComment from "../components/detailBorad/DetailComment";
import { Header1 } from "../elements/Header";
import { MenuDial3, MenuDial4 } from "../elements/MenuDial";

function DetailAdvice() {
  return (
    <>
      <Header1 title={"고민접기"} />
      <Stcontainer>
        <StUser>
          <img src="/userpic.png" alt="프로필사진" className="userimg" />
          <p>닉네임</p>
          <StMenu>
            <MenuDial3 />
          </StMenu>
        </StUser>
        <StBoardBox>
          <span>제목이 들어갑니다.</span>
          <p>
            옷을 이상의 충분히 지혜는 위하여서. 발휘하기 옷을 찾아 긴지라
            아니다. 되는 위하여서 과실이 거선의 있는가? 아니한 얼마나 붙잡아
            설산에서 현저하게 이상이 두기 석가는 생의 것이다. 피고 이것을 구하지
            약동하다. 옷을 이상의 충분히 지혜는 위하여서. 발휘하기 옷을 찾아
            긴지라 아니다. 되는 위하여서 과실이 거선의 있는가? 아니한 얼마나
            붙잡아 설산에서 현저하게 이상이 두기 석가는 생의 것이다. 피고 이것을
            구하지 약동하다. 옷을 이상의 충분히 지혜는 위하여서. 발휘하기 옷을
            찾아 긴지라 아니다. 되는 위하여서 과실이 거선의 있는가? 아니한
            얼마나 붙잡아 설산에서 현저하게 이상이 두기 석가는 생의 것이다. 피고
            이것을 구하지 약동하다. 옷을 이상의 충분히 지혜는 위하여서. 발휘하기
            옷을 찾아 긴지라 아니다. 되는 위하여서 과실이 거선의 있는가? 아니한
            얼마나 붙잡아 설산에서 현저하게 이상이 두기 석가는 생의 것이다. 피고
            이것을 구하지 약동하다.
          </p>
          <StImgBox>
            <img
              alt="업로드사진"
              src="/userpic.png"
              style={{ maxWidth: "7rem", maxHeight: "7rem" }}
            />
          </StImgBox>
          <StBoxInfo>
            <p>조회 0</p>
            <p style={{ position: "absolute", right: "1.5rem" }}>2022.11.22</p>
          </StBoxInfo>
        </StBoardBox>
        <StCommentSet>
          <p>답변 0</p>
          <StMenu>
            <MenuDial4 />
          </StMenu>
        </StCommentSet>
        <DetailComment />
        <DetailComment />
        <DetailComment />
      </Stcontainer>
    </>
  );
}

export default DetailAdvice;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);
  padding: ${(props) => props.theme.paddings.xxl};
`;

/*유저정보 */
const StUser = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  p {
    margin-left: ${(props) => props.theme.margins.sm};
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

/*메뉴 위치조정 */
const StMenu = styled.div`
  position: absolute;
  right: 0rem;
`;

/*글 내용 박스 */
const StBoardBox = styled.div`
  span {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
    margin: ${(props) => props.theme.margins.sm} 0;
  }
`;

/*이미지 정렬 박스 */
const StImgBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 1.8rem;
`;

/*하단 글 정보*/
const StBoxInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.xsm};
  border-bottom: 1px solid ${(props) => props.theme.boxColors.gray3};
`;

/*하단 댓글 정보 */
const StCommentSet = styled.div`
  p {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
