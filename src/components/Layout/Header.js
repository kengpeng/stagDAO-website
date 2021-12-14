import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "76px",
    display: 'flex',
    alignItems: 'center',
    lineHeight: '19px',
    zIndex: 100
  },
  container: {
    width: "60%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: "flex-start",
    "& > img": {
      width: "35px",
      height: "50px",
      paddingRight: "0.5rem"
    },
  },
  text: {
    fontWeight: "700",
    color: theme.palette.text.primary
  },
  discord: {
    display: "flex",
    justifyContent: "flex-end",
    fontWeight: "600",
    height: "40px"
  }
}))

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src="/images/logo.png" alt=""></img>
          <Typography className={classes.text}>
            S T A G
          </Typography>
        </div>

        <Button
          className={classes.discord}
          variant="contained"
          color="secondary"
        >
          Join Discord
        </Button>
      </div>
    </div>
  )
}

export default Header;