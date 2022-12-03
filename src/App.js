//패키지 관련
import Router from "./router/Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import Theme from "./shared/theme";
import ErrorFallback from "./components/ErrorFallback";
import { useRecoilState } from "recoil";
import { alarm } from "../src/api/socketio";
import { alarmsAtom } from "./state/atom";

function App() {
  /* 기존 알림 내용 담기 */
  // const [alarmList, setAlarmList] = useRecoilState(alarmsAtom);

  /* 알림 받기 */
  // alarm("message_alarm", "쪽지가 도착했습니다.", setAlarmList);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

/*너무 작은 화면에서는 지원하지 않도록 */
