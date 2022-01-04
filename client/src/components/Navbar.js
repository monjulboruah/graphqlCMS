import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    backgroundColor: "#003",
    height: "100px",
    padding: "20px",
  },

  grow: {
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      flexGrow: 0.9,
    },
  },
  title: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      padding: "0 3rem",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "flex",
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const handleLogout = () => {
    //store.dispatch(logout());
    document.location.href = "/auth";
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={(classes.growClasses, classes.navContainer)}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h2" noWrap>
            Tech
          </Typography>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Stocks
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Metals
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Currency
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
