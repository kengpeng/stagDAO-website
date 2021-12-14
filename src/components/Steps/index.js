import React from "react";
import { makeStyles } from "@mui/styles";
import Hero from "../Sections/Hero";
import Elk from "../Sections/Elk";
import Summary from "../Sections/Summary";
import Waitlist from "../Sections/Waitlist";
import Footer from "../Layout/Footer";

const useStyles = makeStyles((theme) => ({
  steps: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "76px"
  },
  section: {
    display: "block"
  }
}))

const Steps = () => {
  const classes = useStyles();

  return (
    <div className={classes.steps}>
      <div className={classes.section}>
        <Hero />
      </div>

      <div className={classes.section}>
        <Elk />
      </div>

      <div className={classes.section}>
        <Summary />
      </div>

      <div className={classes.section}>
        <Waitlist />
      </div>

      <Footer />
    </div>
  )
}

export default Steps;