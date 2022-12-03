import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import styled from "styled-components";
import { Container, FlexCenter } from "../shared/css";

function ErrorFallback({ error, resetErrorBoundary }) {
  console.log("에러바운더리", error.message);
  return (
    <Stcontainer>
      <StError>
        <div className="set">
          <ReportProblemIcon sx={{ fontSize: "10rem" }} />
          <span>오류</span>
        </div>
        <p>요청하신 페이지를 처리 중에 오류가 발생했습니다.</p>
        <p>서비스 이용에 불편을 드려서 죄송합니다.</p>

        <button onClick={resetErrorBoundary}>다시 시도하기</button>
      </StError>
    </Stcontainer>
  );
}
export default ErrorFallback;

const Stcontainer = styled.div`
  ${Container};
`;

const StError = styled.div`
  ${FlexCenter};
  flex-direction: column;
  height: 90%;

  .set {
    ${FlexCenter};
    color: ${(props) => props.theme.Colors.blueGreen2};
    span {
      font-size: 3rem;
      font-weight: 600;
    }
  }

  button {
    padding: 0.4rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
`;
