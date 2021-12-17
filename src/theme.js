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
      'QuasimodaW03-Regular',
      'QuasimodaW03-Medium'
    ].join(','),
    h1: {
      fontWeight: 500,
      fontSize: "3.2em",
      fontFamily: 'QuasimodaW03-Medium',
      color: "#D8BF95"
    },
    subtitle1: {
      fontWeight: "400",
      fontSize: "2em"
    },
    subtitle2: {
      fontFamily: 'QuasimodaW03-Regular',
      fontWeight: 400,
      fontSize: "1.6em",
      color: '#D8BF95'
    }
  },
})

export default theme;