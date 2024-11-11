import { ThemeProvider } from "@emotion/react";
import theme from "./context/theme";
import "./index.css";
import { Routes } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        drggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
}

export default App;
