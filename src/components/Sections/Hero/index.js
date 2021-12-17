import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    padding: "none !important",
    background: "#fff",
    zIndex: 10,
    margin: "auto",
  },
  background: {
    padding: "4rem",
    bottom: "0",
    position: "absolute",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "1000px",
    },
  },
  container: {
    position: "relative",
    margin: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "0 !important",
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    }
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingTop: "70%",
      width: "100%",
      fontSize: "0.7em"
    },
    color: theme.palette.secondary.main,
  },
  rightContent: {
    position: "absolute",
    bottom: "0",
    [theme.breakpoints.up("sm")]: {
      right: "0",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-28px",
      overflow: "visible"
    },
    "& > img": {
      width: "645px",
      height: "741px",
      marginBottom: "-4px",
      [theme.breakpoints.down("lg")]: {
        width: "375px",
        height: "471px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "200px",
        height: "241px",
      },
    }
  }
}))

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.leftContent}>
          <Typography variant="subtitle1">
            Real value for real utility.
          </Typography>
          <Typography variant="h1">
            Coming soon.
          </Typography>
        </Box>

        <Box className={classes.rightContent}>
          <img alt="" className={classes.stag} src="/images/stag-gold.png"></img>
        </Box>
      </Box>
    </div>
  )
}

export default Hero;