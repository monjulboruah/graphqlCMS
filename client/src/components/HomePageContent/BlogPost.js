import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useQuery, gql } from "@apollo/client";

const POST_DATA = gql`
  {
    posts {
      title
      image
      description
      pubDate
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    padding: "40px",
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

export default function BlogPost({ BlogPostData }) {
  const { loading, error, data } = useQuery(POST_DATA);

  const classes = useStyles();

  if (loading) return <div>loading...</div>;

  if (error) return <div>Some error happen</div>;

  console.log(data.posts[0].title);
  return (
    <>
      <Grid container className={classes.mainGrid} spacing={3}>
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
            Popular
          </Typography>
        </Grid>
        {data.posts.map((post, index) => {
          return (
            <>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <img
                  src={post.image}
                  className={classes.postImg}
                  alt="blog image"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <Typography
                  component="h2"
                  variant="display4"
                  gutterBottom
                  style={{
                    color: "#000",
                    fontWeight: "700",
                    fontSize: "32px",
                    lineHeight: "32px",
                    alignItems: "center",
                  }}
                >
                  {post.title}
                </Typography>
                <p>{post.pubDate}</p>
                <p>{post.description}</p>
                <Button variant="contained" className={classes.buttonClass}>
                  Read More
                </Button>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
