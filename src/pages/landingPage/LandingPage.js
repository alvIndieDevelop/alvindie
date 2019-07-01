import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Typography,
  IconButton,
  Avatar,
  AppBar,
  Toolbar,
  Drawer,
  Hidden,
  Divider
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

// components
import Content from "./components/LandingPage_Content";

const drawerWidth = 260;
const styles = theme => ({
  root: {
    display: "flex"
  },
  menu: {
    height: "100vh",
    flex: "0 0 auto",
    backgroundColor: "#212121",
    display: "flex",
    flexDirection: "column"
  },
  menuContent: {
    padding: theme.spacing.unit * 3
  },
  menuSpacer: {
    flex: "1 1 100%"
  },
  menuActions: {
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    background: `rgba(0,0,0,0) url("images/PorfileAlvaroMartin.png") no-repeat center center`,
    backgroundSize: "250px 250px",
    height: 200,
    width: 200,
    borderRadius: "50%",
    boxShadow: theme.shadows[5]
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  }
});

class LandingPage extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  render() {
    const { classes, theme } = this.props;

    // drawer
    const Menu = (
      <div className={classes.menu}>
        <div className={classes.toolbar} />
        <div className={classes.menuContent}>
          <div className={classes.avatar} />
          <br />
          <Typography variant="h6">Alvaro Martin Caballero</Typography>
          <Divider />
          <Typography>A web developer Blog & Portfolio</Typography>
        </div>
        <div className={classes.menuSpacer} />
        <Divider />
        <div className={classes.menuActions}>
          <IconButton
            href="https://www.facebook.com/alvindiedevelop/"
            target="_blank"
          >
            <Avatar src="images/osIcons/1461630829_facebook-square-shadow-social-media.png" />
          </IconButton>
        </div>
      </div>
    );
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5">Alvaro Martin Caballero</Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {Menu}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                {Menu}
              </Drawer>
            </Hidden>
          </nav>
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LandingPage);
