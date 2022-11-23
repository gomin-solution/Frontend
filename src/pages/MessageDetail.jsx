import { Header4 } from "../elements/Header";
import styled from "styled-components";
import Footer from "../elements/Footer";
// import { useQuery } from "react-query";
// import { getMessage } from "../api/messageApi";

function Message() {
  // const { data: res } = useQuery("getMessage", getMessage);

  return (
    <>
      <Header4 title={"쪽지"} />
      <Stcontainer>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>보낸 쪽지</span>
            <span style={{ fontSize: "0.75rem" }}>22022. 11. 22. 15:00</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>
            오늘 점심으로 뭐가 좋을까요?
          </div>
        </StWrap>
        <StWrap>
          <StInnerWrap>
            <span style={{ fontWeight: "600" }}>받은 쪽지</span>
            <span style={{ fontSize: "0.75rem" }}>22022. 11. 22. 15:00</span>
          </StInnerWrap>
          <div style={{ fontSize: "0.875rem" }}>
            오늘 점심으로 뭐가 좋을까요?
          </div>
        </StWrap>
      </Stcontainer>
      <Footer title={"쪽지"} />
    </>
  );
}

export default Message;

const Stcontainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 8rem);
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
  width: 100%;
  height: 5rem;
  margin-bottom: ${(props) => props.theme.margins.sm};
  padding: ${(props) => props.theme.paddings.xl};
  border-bottom: 0.1rem solid lightgray;
`;

const StInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.base};
`;
