import { Routes } from "./routes/Routes";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./context/theme";
function App() {
  return (
    <ThemeProvider theme = {theme}>
      
  <Routes />
  </ThemeProvider>
  )

}

export default App;
