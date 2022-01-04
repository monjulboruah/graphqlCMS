import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((themes) => ({
  gridClass: {
    padding: "20px",
  },

  outerBox: {
    paddingBottom: "30px",
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: "auto",
    width: "80%",
    background: "#184091",
  },

  innerBox: {
    margin: "auto",
    background: "#fff",
    width: "85%",
  },

  innerMostBox: {
    padding: "30px",
  },

  aboutImg: {
    width: "100%",
    height: "auto",
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridClass}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography
            component="h2"
            variant="display4"
            gutterBottom
            style={{
              marginTop: "60px",
              marginLeft: "60px",
              color: "#000",
              fontWeight: "bold",
              fontSize: "36px",
              lineHeight: "36px",
              alignItems: "left",
            }}
          >
            About Us
          </Typography>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box className={classes.outerBox}>
            <Box className={classes.innerBox}>
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className={classes.aboutImg}
                alt="test image"
              />
              <Box className={classes.innerMostBox}>
                <Typography
                  component="h3"
                  variant="display4"
                  gutterBottom
                  style={{
                    fontWeight: "bold",
                    fontSize: "28px",
                    lineHeight: "28px",
                  }}
                >
                  Why do we use it
                </Typography>
                <p>March 19 2019 5 READ</p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters as opposed to using Content
                  here content here making..
                </p>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
