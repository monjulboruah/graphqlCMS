import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "380px",
    height: "400px",
    border: "1px solid #003",
  },
  media: {
    height: "250px",
  },
  link: {
    textDecoration: "none",
  },

  grow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Link to={"/post/" + props.title} className={classes.link}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent align="center">
            <Typography gutterBottom variant="p" component="h3">
              {props.title}
            </Typography>
            <Typography gutterBottom variant="p" component="h4">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
