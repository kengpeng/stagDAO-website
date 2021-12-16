import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Link, Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    lineHeight: '19px',
    zIndex: 100,
    backgroundColor: "#fff"
  },
  container: {
    height: "200px",
    margin: "auto",
    display: "flex",
    [theme.breakpoints.up("xl")]: {
      justifyContent: "space-between",
      alignItems: "center",
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
      alignItems: "center",
      width: "60%",
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
  image: {
    width: "54px",
    height: "70px",
    paddingRight: theme.spacing(2)
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
    "& > a": {
      marginRight: theme.spacing(1)
    },
    "& > a > img": {
      width: "30px",
      paddingRight: theme.spacing(1)
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
        <div className={classes.logo}>
          <img className={classes.image} src="/images/stag-logo-dark.png" alt=""></img>
          <img className={classes.text} src="/images/stag-logo-text-dark.png" alt=""></img>
        </div>

        <Box className={classes.social}>
          <Typography className={classes.title} variant="subtitle1">
            Social links
          </Typography>
          <Box className={classes.row}>
            <Link target="_blank" rel="noreferrer" href="https://discord.com/invite/StagDAO">
              <img alt="" href="" src="/images/discord-dark.png"></img>
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://twitter.com/stagDAO">
              <img alt="" href="" src="/images/twitter.png"></img>
            </Link>
          </Box>
        </Box>

        <Box className={classes.docs}>
          <Typography className={classes.title} variant="subtitle1">
            Reading
          </Typography>
          <Link target="_blank" rel="noreferrer" href="https://documents.stagdao.finance/start">
            <Typography>
              Documentation
            </Typography>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://medium.com/stag-dao">
            <Typography>
              Medium
            </Typography>
          </Link>
        </Box>
      </div>
    </div>
  )
}

export default Footer;