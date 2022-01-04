import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, gql } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CATEGORY_DATA = gql`
  {
    categories {
      name
      posts {
        title
        image
        description
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    padding: "30px",
    marginTop: "100px",
  },

  postImg: {
    width: "90%",
    height: "auto",
  },

  buttonClass: {
    height: "40px",
    background: "#000",
    borderRadius: "0",
    color: "white",
  },
}));

export default function Categories() {
  const { loading, error, data } = useQuery(CATEGORY_DATA);

  const classes = useStyles();

  if (loading) return <div>loading...</div>;

  if (error) return <div>Some error happen</div>;

  console.log(data.categories);
  return (
    <>
      <Grid container className={classes.mainGrid}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography
            component="h2"
            variant="display4"
            gutterBottom
            style={{
              color: "#000",
              fontWeight: "700",
              fontSize: "42px",
            }}
          >
            Updated With Latest News
          </Typography>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          Grid 1{" "}
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          Grid 2
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          Grid 3
        </Grid>
      </Grid>
    </>
  );
}
