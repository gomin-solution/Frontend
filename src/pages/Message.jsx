import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";
import { useQuery } from "react-query";
import { getRoom } from "../api/messageApi";

function Message() {
  const { data: res } = useQuery("getRoom", getRoom);
  console.log("rooms", res?.data.myNotePage);

  return (
    <>
      <Header4 title={"쪽지"} />
      <Stcontainer>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>RE) 오늘의 점심 픽은?</span>
            <span style={{ fontSize: "0.75rem" }}>2022. 11. 04. 14:23</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>상대 닉네임</div>
        </StWrap>
      </Stcontainer>
      <Footer title={"쪽지"} />
    </>
  );
}

export default Message;

const Stcontainer = styled.div`
  background-color: tomato;
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 9rem);
  padding: ${(props) => props.theme.paddings.xl};
  overflow: auto;
  &::-webkit-scrollbar {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: none;
  }
`;

const StWrap = styled.div`
  background-color: white;
  width: 100%;
  height: 5rem;
  margin-bottom: ${(props) => props.theme.margins.sm};
  padding: ${(props) => props.theme.paddings.xl};
`;

const StInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.base};
`;
