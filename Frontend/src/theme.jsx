import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: `'Libre Baskerville', serif`,
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  palette: {
    primary: {
      main: '#3991cd', 
       // Replace with your primary color
    },
    secondary: {
      main: '#5d5a7d',  // Replace with your secondary color
    },
  },
});

export default theme;
