import { makeStyles } from "@mui/styles";
import React from "react";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: "400px",
      display: "flex",
    },
    [theme.breakpoints.down("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      height: "auto",
    },
  },
  container: {
    margin: "auto",
    justifyContent: "center",
    textAlign: "center",
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
    color: theme.palette.primary.main
  }
}))

const Elk = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <img alt="" src="/images/elk-logo.png"></img>

        <Typography variant="h1" className={classes.title}>
          Made With Elk
        </Typography>

        <Typography variant="subtitle1" className={classes.description}>
          Stag takes the innovative bonding concept and gives it actual utility by using it build to depth of liquidity for Elk liquidity pairs, initially native network tokens (e.g. ELK-MATIC), which are key for minimizing price impact on ElkNet's cross-chain liquidity protocol. This creates a mutually beneficial flywheel effect. As Stag grows, Elk gets stronger; as Elk grows, Stag gets stronger.
        </Typography>
      </Box>
    </div>
  )
}

export default Elk;