import React, { useState, useContext } from "react";
import { AuthContext } from "../../context";
import { Redirect } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import SideNavToggle from "../../admin/SideNavToggle";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ReactEditor from "./ReactEditor";
import { makeStyles } from "@material-ui/core/styles";
import SideNav from "../../admin/SideNav";

const useStyles = makeStyles((themes) => ({
  grid: {
    marginTop: "60px",
  },
}));

const CREATE_POST = gql`
  mutation Mutation(
    $title: String!
    $username: String!
    $description: String!
    $content: String!
    $image: String!
    $slug: String!
    $category: String!
  ) {
    createPost(
      title: $title
      username: $username
      content: $content
      category: $category
      image: $image
      slug: $slug
      description: $description
    ) {
      id
    }
  }
`;

export default function CreatePost(props) {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState({
    post: null,
  });

  const [createPost, { loading }] = useMutation(CREATE_POST, {
    onCompleted(data) {
      // console.log(data);
      props.history.push("/");
    },

    onError: (err) => {
      // console.log(err);
      setErrors(err);
    },
  });

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

  //console.log(user.username);
  const createPostPage = user ? (
    <Container>
      <Grid
        container
        className={classes.grid}
        justifyContent="space-between"
        spacing={3}
      >
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
          />
          <button
            onClick={() =>
              createPost({
                variables: {
                  title: post.title,
                  username: user.username,
                  content: post.content,
                  category: post.category,
                  image: post.image,
                  slug: post.slug,
                  description: post.description,
                },
              })
            }
          >
            Create Post
          </button>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Redirect to="/login" />
  );

  return createPostPage;
}
