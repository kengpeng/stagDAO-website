import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#64514E',
    },
    secondary: {
      main: '#D8BF95',
      contrastText: "#fff"
    },
  },
  typography: {
    fontFamily: [
      'Quasimoda',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: "900",
      fontSize: "3.2em",
      color: "#D8BF95"
    },
    subtitle1: {
      fontWeight: "400",
      fontSize: "2em"
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "1.6em",
      color: '#D8BF95'
    }
  }
})

export default theme;