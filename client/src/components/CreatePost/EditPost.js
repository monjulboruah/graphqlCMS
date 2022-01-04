import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import ReactEditor from "./ReactEditor";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((themes) => ({
  grid: {
    marginTop: "60px",
  },
}));

const GET_EDIT_POST = gql`
  query Query($id: ID!) {
    postById(id: $id) {
      id
      title
      content
      category {
        id
      }
      image
      slug
      pubDate
      description
    }
  }
`;

const EDIT_POST = gql`
  mutation Mutation(
    $id: ID!
    $title: String!
    $category: String!
    $description: String!
    $content: String!
    $image: String!
    $pubDate: String!
    $slug: String!
  ) {
    editPost(
      id: $id
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

export default function EditPost(props) {
  const [post, setPost] = useState({
    post: null,
  });

  const classes = useStyles();
  let { id } = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(GET_EDIT_POST, {
    variables: {
      id: id,
    },
  });

  const [editPost, { dta, lding, err }] = useMutation(EDIT_POST);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>error....</div>;
  }

  let postData = {
    id: data.postById.id,
    title: data.postById.title,
    category: data.postById.category.id,
    description: data.postById.description,
    content: data.postById.content,
    image: data.postById.image,
    pubDate: data.postById.pubDate,
    slug: data.postById.slug,
  };

  console.log(postData);
  if (dta) {
    console.log(dta);
  }

  return (
    <Grid container className={classes.grid} justifyContent="space-between">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <ReactEditor
          onChangeData={(post) => setPost(post)}
          initialData={postData}
        />
        <button
          onClick={() =>
            editPost({
              variables: {
                id: post.id,
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
          Update Post
        </button>
      </Grid>
    </Grid>
  );
}
