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
    }
  },
  container: {
    position: "relative",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "auto",
      display: "flex",
      flexDirection: "row"
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
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
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    margin: "auto",
    padding: theme.spacing(4)
  },
  rightContainer: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    margin: "auto",
    padding: theme.spacing(4)
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

          <a className={classes.link} href="https://discord.com/invite/StagDAO" target="_blank">
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