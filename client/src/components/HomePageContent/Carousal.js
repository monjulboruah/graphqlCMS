import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "30px",
    padding: "40px",
  },

  carousalWrap: {
    background: "#003",
  },

  carousal: {
    position: "relative",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },

  carousalImg: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },

  leftArrow: {
    position: "absolute",
    top: "35%",
    left: "-20px",
    fontSize: "3rem",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid #003",
    background: "#003",
    color: "white",
  },

  rightArrow: {
    position: "absolute",
    top: "55%",
    left: "-20px",
    fontSize: "3rem",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid #003",
    background: "#003",
    color: "white",
  },

  slide: {
    opacity: 0,
    transitionDuration: "1s ease",
  },

  slideActive: {
    opacity: 1,
    transitionDuration: "1s",
    transform: "scale(1.0)",
  },

  content: {
    display: "flex",
    marginTop: "60px",
    padding: "20px",
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
    marginLeft: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "row",
    alignItems: "left",
  },
}));

export default function Carousal({ CarousalData }) {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = CarousalData.length;

  const nextCarousal = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevCarousal = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Grid container className={classes.mainGrid}>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Box className={classes.carousal}>
          <ArrowBackIosIcon
            className={classes.leftArrow}
            onClick={prevCarousal}
          />
          <ArrowForwardIosIcon
            className={classes.rightArrow}
            onClick={nextCarousal}
          />
          {CarousalData.map((carousal, index) => {
            return (
              <div
                className={
                  index === current ? classes.slideActive : classes.slide
                }
                key={index}
              >
                {index === current && (
                  <img
                    src={carousal.image}
                    className={classes.carousalImg}
                    alt="test image"
                  />
                )}
              </div>
            );
          })}
        </Box>
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Box className={classes.content}>
          <Typography
            component="h2"
            variant="display4"
            gutterBottom
            style={{
              marginLeft: "20px",
              color: "#006",
              fontWeight: "600",
              fontSize: "30px",
              alignItems: "center",
            }}
          ></Typography>

          <Typography
            component="h2"
            variant="display4"
            gutterBottom
            style={{
              marginLeft: "20px",
              color: "#000",
              fontWeight: "600",
              fontSize: "42px",
              alignItems: "center",
            }}
          >
            Get the latest news on business, tech and science
          </Typography>
        </Box>
        <Box className={classes.buttonBox}>
          <Button variant="contained" className={classes.buttonClass}>
            Read More
          </Button>
          <Button variant="contained" className={classes.buttonClass}>
            Contact Us
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
