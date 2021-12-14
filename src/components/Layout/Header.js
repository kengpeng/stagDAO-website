import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, Button } from "@mui/material";

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
    [theme.breakpoints.up("xl")]: {
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    }
  },
  logo: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: "flex-start",
    top: theme.spacing(3)
  },
  image: {
    width: "54px",
    height: "70px",
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
        
        <a className={classes.link} href="https://discord.com/invite/StagDAO" target="_blank">
          <Button
            className={classes.discord}
            variant="contained"
            color="secondary"
            style={{textTransform: 'none'}}
          >
            <img alt="" src="/images/discord.png"></img>
              Join Discord
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Header;