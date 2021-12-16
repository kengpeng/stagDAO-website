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
      'Red Hat Display',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: "900",
      fontSize: "2.7em"
    },
    subtitle1: {
      fontWeight: "400",
      fontSize: "1.2em"
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "1.4em",
      color: '#D8BF95'
    }
  }
})

export default theme;