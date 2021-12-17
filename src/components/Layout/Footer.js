import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
    display: 'flex',
    alignItems: 'center',
    lineHeight: '19px',
    zIndex: 100,
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "70%"
    },
  },
  container: {
    height: "200px",
    margin: "auto",
    display: "flex",
    [theme.breakpoints.up("xl")]: {
      justifyContent: "left",
      alignItems: "center",
      width: "60%",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "left",
      alignItems: "center",
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
      flexDirection: "column",
      alignItems: "left",
    },
  },
  logo: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: "flex-start",
    top: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  title: {
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2)
    }
  },
  text: {
    height: "23px",
    width: "87px"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      marginBottom: theme.spacing(1),
      margin: "auto",
    },
    "& > a > img": {
      width: "auto",
      height: "35px",
      paddingRight: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        paddingRight: theme.spacing(6),
      },
      [theme.breakpoints.down("md")]: {
        paddingBottom: theme.spacing(2),
        height: "25px",
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(3),
      },
    }
  },
  social: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    }
  },
  docs: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
      paddingBottom: theme.spacing(3)
    }
  }
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Box className={classes.row}>
          <Link target="_blank" rel="noreferrer" href="https://twitter.com/stagDAO">
            <img alt="" href="" src="/images/twitter.png"></img>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://documents.stagdao.finance/start">
            <img alt="" href="" src="/images/docs.png"></img>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://discord.com/invite/StagDAO">
            <img alt="" href="" src="/images/discord.png"></img>
          </Link>
        </Box>
      </div>
    </div>
  )
}

export default Footer;