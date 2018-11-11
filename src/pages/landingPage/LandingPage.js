import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CssBaseline, Typography, Fade, Slide } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    height: "100vh"
  },
  menu: {
    flex: "0 0 auto",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 4}px`,
    backgroundColor: "#212121",
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    background: `rgba(0,0,0,0) url("images/PorfileAlvaroMartin.png") no-repeat center center`,
    backgroundSize: "250px 250px",
    height: 200,
    width: 200,
    borderRadius: "50%",
    boxShadow: theme.shadows[5]
  },
  landing: {
    flexGrow: 1,
    background: `rgba(0,0,0,0) url("images/LogoAlvaro2.png") no-repeat center center`,
    backgroundSize: "cover",
    backgroundColor: theme.palette.common.white
  }
});

const LandingPage = props => {
  const { classes } = props;
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Slide
          in={true}
          direction="right"
          mountOnEnter
          unmountOnExit
          timeout={1000}
          style={{ transitionDelay: 1000 }}
        >
          <div className={classes.menu}>
            <div>
              <div className={classes.avatar} />
              <br />
              <Typography variant="title">Alvaro Martin Caballero</Typography>
            </div>
          </div>
        </Slide>
        <Fade in={true} timeout={3000} style={{ transitionDelay: 2000 }}>
          <div className={classes.landing} />
        </Fade>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(LandingPage);
