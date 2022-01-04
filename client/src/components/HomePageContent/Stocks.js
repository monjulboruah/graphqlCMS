import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((themes) => ({
  gridClass: {
    marginTop: "30px",
    background: "#003",
    color: "white",
    padding: "50px",
  },

  stockImg: {
    width: "90%",
    height: "auto",
    borderRadius: "10px",
  },
}));

export default function Socks() {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridClass}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography
          component="h2"
          variant="display4"
          gutterBottom
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "42px",
            alignItems: "center",
          }}
        >
          Stocks
        </Typography>
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <img
          src="https://image.freepik.com/free-vector/bar-graph_52683-9732.jpg"
          className={classes.stockImg}
          alt="test image"
        />
      </Grid>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Typography
          component="h2"
          variant="display4"
          gutterBottom
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "30px",
            alignItems: "left",
          }}
        >
          Where can I get some
        </Typography>
        <p style={{ color: "grey" }}>March 19 2019 5 READ</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined g to
          use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator..
        </p>
      </Grid>
    </Grid>
  );
}
