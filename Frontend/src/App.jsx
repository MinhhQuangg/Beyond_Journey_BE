import { ThemeProvider } from "@emotion/react";
import theme from "./context/theme";
import "./index.css";
import { Routes } from "./routes/Routes";
import "./index.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
