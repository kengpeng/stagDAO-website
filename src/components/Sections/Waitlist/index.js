import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "400px",
      display: "flex"
    },
    [theme.breakpoints.down("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      height: "auto",
    },
  },
  container: {
    position: "relative",
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      width: "70%",
      display: "flex",
      flexDirection: "row"
    },
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      width: "90%",
    },
    "& > img": {
      width: "76px",
      height: "80px",
      paddingBottom: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.primary.main
  },
  description: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color: theme.palette.primary.main
  },
  leftContainer: {
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  rightContainer: {
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      padding: theme.spacing(4)
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      margin: "auto"
    },
  },
  button: {
    marginTop: theme.spacing(2),
    fontSize: "3em",
    "& > img": {
      width: "20px",
      paddingRight: theme.spacing(1)
    }
  },
  link: {
    textDecoration: "none"
  }
}))

const Waitlist = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.leftContainer}>
          <Typography variant="h1" className={classes.title}>
            Waitlist Coming Soon
          </Typography>
        </Box>

        <Box className={classes.rightContainer}>
          <Typography variant="subtitle1" className={classes.description}>
            To participate in Stag DAO join our community on Discord and earn your place on our whitelist.
          </Typography>

          <a className={classes.link} rel="noopener noreferrer" href="https://discord.com/invite/StagDAO" target="_blank">
            <Button
              className={classes.button}
              variant="contained"
              style={{textTransform:"none"}}
            >
            <img alt="" src="/images/discord.png"></img>
              Join Discord
            </Button>
          </a>
        </Box>
      </Box>
    </div>
  )
}

export default Waitlist;