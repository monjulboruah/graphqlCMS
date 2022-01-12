import React, { useContext } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AuthContext } from "../context";
import Logo from "../assets/image/blogimage.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      flexGrow: 0.9,
    },
  },
  appBar: {
    background: "#000",
    height: "60px",
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

  link: {
    textDecoration: "none",
    color: "#fff",
  },

  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: "180px",
  },
  sectionDesktop: {
    display: "flex",
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const { user, logout } = useContext(AuthContext);

  const menuBar = user ? (
    <>
      <Box>
        <img src={Logo} alt="logo" className={classes.logo} />
      </Box>
      <AppBar
        position="relative"
        className={(classes.growClasses, classes.appBar)}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h2" noWrap>
            <Link to="/" className={classes.link}>
              {user.username}
            </Link>
          </Typography>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Link to="/create-post" className={classes.link}>
              <Typography variant="h6" className={classes.title}>
                Create Post
              </Typography>
            </Link>

            <Typography variant="h6" className={classes.title}>
              <Link to="/admin" className={classes.link}>
                View All Post
              </Link>
            </Typography>

            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.link}>
                Comments
              </Link>
            </Typography>

            <Typography variant="h6" className={classes.title} onClick={logout}>
              <Link to="/" className={classes.link}>
                Logout
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </>
  ) : (
    <>
      <Box>
        <img src={Logo} alt="logo" className={classes.logo} />
      </Box>
      <AppBar
        position="relative"
        className={(classes.growClasses, classes.appBar)}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h2" noWrap>
            Blog
          </Typography>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Typography variant="h6" className={classes.title}>
              Latest
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Categories
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Blogs
            </Typography>
            <Typography variant="h6" className={classes.title}>
              About
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );

  return menuBar;
}
