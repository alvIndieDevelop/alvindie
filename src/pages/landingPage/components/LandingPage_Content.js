import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  paper: {
    padding: theme.spacing.unit * 3
  },
  logo: {
    margin: theme.spacing.unit
  },
  toolbar: theme.mixins.toolbar,
  logo2: {
    margin: "auto",
    background: `rgba(0,0,0,0) url("images/LogoAlvaro2.png") no-repeat center center`,
    backgroundSize: "250px 150px",
    backgroundColor: theme.palette.common.white,
    height: 200,
    width: 200,
    borderRadius: "50%",
    boxShadow: theme.shadows[5]
  }
});

const LandingPage_Content = props => {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <div className={classes.logo}>
            <div className={classes.logo2} />
          </div>
          <div className={classes.title}>
            <Typography variant="h6" align="center">
              Acerca de mi
            </Typography>
          </div>
          <div className={classes.aboutMe}>
            <Typography align="center">
              Mi nombre es Alvaro Martin Caballero me dedico con pasión
              <br />
              al desarrollo de videojuegos y al desarrollo web,
              <br />
              aprendiendo nuevas tecnologías en el transcurso.
              <br />
              soy un joven emprendedor que me gusta aportar ideas para
              <br />
              resolver problemas.
              <br />
              <br />
              <br />
              Mis pasatiempo vez en cuando entrar algún GameJam o<br />
              Hackaton.
            </Typography>
            <Button variant="contained">mi CV</Button>
          </div>
        </Paper>
      </Grid>
    </main>
  );
};

export default withStyles(styles)(LandingPage_Content);
