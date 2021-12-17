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
      fontSize: "3em",
      color: "#D8BF95"
    },
    subtitle1: {
      fontWeight: "400",
      fontSize: "1.4em"
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "1.4em",
      color: '#D8BF95'
    }
  }
})

export default theme;