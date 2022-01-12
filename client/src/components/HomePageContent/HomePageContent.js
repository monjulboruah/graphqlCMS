import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Carousal from "./Carousal";
import { CarousalData } from "./CarousalData";
import BlogPost from "./BlogPost";
import Stocks from "./Stocks";
import Comments from "./Comments";
import AboutUs from "./AboutUs";

const useStyles = makeStyles((themes) => ({
  root: {
    flexGrow: 1,
  },

  grid: {
    margin: "0",
  },

  content: {
    marginTop: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonClass: {
    height: "50px",
    background: "#000",
    borderRadius: "0",
    marginLeft: "10px",
    marginTop: "20px",
    color: "white",
  },

  buttonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function HomePageContent() {
  const classes = useStyles();
  return (
    <div style={{ padding: 4 }}>
      <Grid container className={classes.grid} justifyContent="space-between">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Carousal CarousalData={CarousalData} />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <BlogPost />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Stocks />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <BlogPost />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Comments />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <AboutUs />
        </Grid>
      </Grid>
    </div>
  );
}
