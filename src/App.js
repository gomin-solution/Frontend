//패키지 관련
import Router from "./router/Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import Theme from "./shared/theme";
import ErrorFallback from "./components/ErrorFallback";
import "./util/fcm";

function App() {
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
