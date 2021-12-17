import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80px",
    display: 'flex',
    alignItems: 'center',
    lineHeight: '19px',
    zIndex: 100,
  },
  container: {
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(3),
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
  logo: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  image: {
    width: "54px",
    height: "73px",
    paddingRight: theme.spacing(2)
  },
  text: {
    height: "23px",
    width: "87px"
  },
  discord: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "auto",
    fontWeight: "600",
    fontSize: "2rem",
    height: "40px",
    "& > img": {
      width: "20px",
      paddingRight: theme.spacing(1)
    }
  },
  link: {
    textDecoration: "none",
    alignSelf: 'center',
    textAlign: "center",
  }
}))

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img className={classes.image} src="/images/stag-logo-light.png" alt=""></img>
          <img className={classes.text} src="/images/stag-logo-text-light.png" alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Header;