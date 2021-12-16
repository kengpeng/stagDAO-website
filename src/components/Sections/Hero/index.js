import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-80px",
    width: "100%",
    padding: "none !important",
    background: "linear-gradient(122.36deg, #64514E 23.36%, #D8BF95 115.61%)",
    zIndex: 10,
    [theme.breakpoints.up("md")]: {
      height: "700px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "900px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1000px",
    },
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
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      minHeight: "900px"
    }
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      paddingTop: "200px"
    },
    color: "#fff",
  },
  rightContent: {
    position: "absolute",
    bottom: "0",
    right: "0",
    "& > img": {
      width: "545px",
      height: "641px",
      marginBottom: "-4px",
      [theme.breakpoints.down("lg")]: {
        width: "375px",
        height: "471px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "275px",
        height: "321px",
      },
    }
  },
  button: {
    width: "130px",
    top: theme.spacing(5),
  }
}))

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img alt="" className={classes.background} src="/images/hero-background.png"></img>

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
            style={{textTransform: 'none'}}
            href="#summary"
          >
            Learn more
          </Button>
        </Box>

        <Box className={classes.rightContent}>
          <img alt="" className={classes.stag} src="/images/stag-gold.png"></img>
        </Box>
      </Box>

    </div>
  )
}

export default Hero;