import styled, { ThemeProvider } from "styled-components";
import Layout from "./layout/Layout";
import GlobalStyle from "./globalStyle";
import { useTheme } from "./context/ThemeContext";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {

  const {mode} = useTheme();
  return (
    <ThemeProvider theme={ mode == "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppWrapper>
        <Layout />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  /* border: 2px solid #f00; */
`;
