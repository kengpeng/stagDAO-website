import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    background: "linear-gradient(122.36deg, #64514E 23.36%, #D8BF95 115.61%)",
    zIndex: 10,
    [theme.breakpoints.up("md")]: {
      height: "700px",
    },
    [theme.breakpoints.up("xxl")]: {
      height: "900px",
    },
  },
  background: {
    width: "40%",
    padding: "4rem",
    bottom: "0",
    position: "absolute"
  },
  container: {
    position: "relative",
    width: "60%",
    margin: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "0 !important",
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "60%",
    color: "#fff",
  },
  rightContent: {
    position: "absolute",
    bottom: "0",
    right: "0",
    "& > img": {
      width: "545px",
      height: "641px",
      marginBottom: "-4px"
    }
  },
  button: {
    width: "130px",
    textDecoration: "lowercase",
    top: "2rem"
  }
}))

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.background} src="/images/hero-background.png"></img>

      <Box className={classes.container}>
        <Box className={classes.leftContent}>
          <Typography variant="h1" mb={2}>
            The First Cross-Chain Reserve Currency
          </Typography>
          <Typography variant="subtitle1">
            Stag aims to become the first cross-chain reserve currency, leveraging Elk's expansive network and innovative cross-chain architecture to promote true multi-chain native projects, while seizing evolving opportunities for growth wherever they appear.
          </Typography>

          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Learn more
          </Button>
        </Box>

        <Box className={classes.rightContent}>
          <img className={classes.stag} src="/images/stag-gold.png"></img>
        </Box>
      </Box>

    </div>
  )
}

export default Hero;