//패키지 관련
import Router from "./router/Router";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./shared/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;

/*너무 작은 화면에서는 지원하지 않도록 */
