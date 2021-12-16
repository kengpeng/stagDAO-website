import React from "react";
import Header from "./Header";
import Steps from "../Steps";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "0",
    left: "0",
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    justifyContent: 'flex-start',
    padding: "0"
  },
  steps: {
    display: "block",
    position: "relative"
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      
      <Steps />
    </div>
  )
}

export default Layout;