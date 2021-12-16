import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  summary: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "auto",
      backgroundColor: "#fff",
      display: "flex"
    }
  },
  container: {
    margin: "auto",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      width: "70%",
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
    position: "relative",
    "& > img": {
      position: "absolute",
      width: "100%",
      margin: "auto",
      justifyContent: "center",
      display: "flex",
      top: "50%"
    }
  },
  title: {
    color: theme.palette.primary.main,
    padding: theme.spacing(7),
  },
  section: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(4),
    width: "60%",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "70%",
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
  },
  description: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
    color: theme.palette.primary.main,
  },
  subtitle: {
    color: theme.palette.secondary.main
  }
}))

const Summary = () => {
  const classes = useStyles();

  return (
    <div id="summary" className={classes.summary}>
      <Box className={classes.container}>
        <img alt="" src="/images/summary-background.png"></img>
        <Typography variant="h1" className={classes.title}>
          How Stag DAO Works
        </Typography>

        <Box className={classes.section}>
          <Typography variant="h1" className={classes.subtitle}>
            Revenue Generation
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            Stag DAO will allow users to bond new STAG through purchasing STAG with existing assets.
          </Typography>
          <Divider />
        </Box>      

        <Box className={classes.section}>
          <Typography variant="h1" className={classes.subtitle}>
            Grow Treasury & Minimize Price Impacts
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            By building a deep treasury with ELK liquidity pairs, Stag DAO will minimize price impacts and strengthen the ElkNet and Stag DAO.
          </Typography>
          <Divider />
        </Box>

        <Box className={classes.section}>
          <Typography variant="h1" className={classes.subtitle}>
            Reward Holders
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            Stag DAO will reward holders as the treasury and by promoting multi-chain native projects.
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Summary;