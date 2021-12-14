import React from "react";
import { makeStyles } from "@mui/styles";
import { Image, Button } from "@mui/material";
import Hero from "../Sections/Hero";
import Elk from "../Sections/Elk";
import Summary from "../Sections/Summary";
import Waitlist from "../Sections/Waitlist";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    height: "76px"
  }
}))

const Steps = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />

      <Elk />

      <Summary />

      <Waitlist />
    </div>
  )
}

export default Steps;