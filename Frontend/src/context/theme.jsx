import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: `'Libre Baskerville', serif`,
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#15919B",
    },
    secondary: {
      main: "#0C6478",
    },
  },
});

export default theme;
