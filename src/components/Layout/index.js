import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Steps from "../Steps";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <Steps />

      <Footer />
    </div>
  )
}

export default Layout;