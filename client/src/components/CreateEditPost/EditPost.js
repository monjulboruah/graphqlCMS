import React, { useState, useContext } from "react";
import { AuthContext } from "../../context";
import { useParams, Redirect } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ReactEditor from "./ReactEditor";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SideNavToggle from "../../admin/SideNavToggle";
import SideNav from "../../admin/SideNav";

const useStyles = makeStyles((themes) => ({
  grid: {
    marginTop: "30px",
  },
  btn: {
    marginLeft: "20px",
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
      username
      description
    }
  }
`;

const EDIT_POST = gql`
  mutation Mutation(
    $id: ID!
    $title: String!
    $username: String!
    $category: String!
    $description: String!
    $content: String!
    $image: String!
    $slug: String!
  ) {
    editPost(
      id: $id
      title: $title
      username: $username
      category: $category
      description: $description
      content: $content
      image: $image
      slug: $slug
    ) {
      id
    }
  }
`;

export default function EditPost(props) {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState({
    post: null,
  });

  const classes = useStyles();

  const { user } = useContext(AuthContext);
  // console.log(id);
  const { loading, error, data } = useQuery(GET_EDIT_POST, {
    variables: {
      id: id,
    },
  });
  const username = data.postById.username;
  const [editPost] = useMutation(EDIT_POST, {
    onCompleted(dta) {
      //    console.log(data);
      props.history.push("/admin");
    },

    variables: {
      id: id,
      title: post.title,
      username: username,
      category: post.category,
      description: post.description,
      content: post.content,
      image: post.image,
      slug: post.slug,
    },

    onError: (err) => {
      console.log(err);
      setErrors(err);
    },
  });

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <Redirect to="/" />;
  }

  let postData = {
    id: id,
    title: data.postById.title,
    category: data.postById.category.id,
    description: data.postById.description,
    content: data.postById.content,
    image: data.postById.image,
    slug: data.postById.slug,
  };

  function onSubmitData() {
    editPost();
  }

  const editPostPage = user ? (
    <Container>
      <Grid container className={classes.grid} justifyContent="space-between">
        <Box
          component={Grid}
          item
          align="left"
          item
          sm={12}
          md={12}
          lg={3}
          xs={12}
          display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
        >
          <SideNavToggle />
        </Box>
        <Box
          component={Grid}
          item
          align="left"
          item
          sm={3}
          md={3}
          lg={3}
          xs={3}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        >
          <SideNav />
        </Box>
        <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
          <ReactEditor
            onChangeData={(post) => setPost(post)}
            initialData={postData}
            onSubmitData={() => onSubmitData()}
          />
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Redirect to="/login" />
  );

  return editPostPage;
}
