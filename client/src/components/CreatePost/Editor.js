import React, { useState } from "react";

import { gql, useMutation } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import ReactEditor from "./ReactEditor";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((themes) => ({
  grid: {
    marginTop: "60px",
  },
}));

const CREATE_POST = gql`
  # Increments a back-end counter and gets its resulting value
  mutation CreatePost(
    $title: String!
    $category: String!
    $description: String!
    $content: String!
    $image: String!
    $pubDate: String!
    $slug: String!
  ) {
    createPost(
      title: $title
      category: $category
      description: $description
      content: $content
      image: $image
      pubDate: $pubDate
      slug: $slug
    ) {
      id
    }
  }
`;

export default function Editor(props) {
  const classes = useStyles();

  const [post, setPost] = useState({
    post: null,
  });

  const [createPost] = useMutation(CREATE_POST);

  let postData = {
    id: "",
    title: "",
    category: "",
    description: "",
    content: "",
    image: "",
    pubDate: "",
    slug: "",
  };

  console.log(post.category);
  return (
    <Grid container className={classes.grid} justifyContent="space-between">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <ReactEditor
          onChangeData={(post) => setPost(post)}
          initialData={postData}
        />
        <button
          onClick={() =>
            createPost({
              variables: {
                title: post.title,
                category: post.category,
                description: post.description,
                content: post.content,
                image: post.image,
                pubDate: post.pubDate,
                slug: post.slug,
              },
            })
          }
        >
          Create Post
        </button>
      </Grid>
    </Grid>
  );
}
