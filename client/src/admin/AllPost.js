import React, { useState, useContext } from "react";
import { AuthContext } from "../context";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import SideNavToggle from "./SideNavToggle";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useQuery, gql, useMutation } from "@apollo/client";

const POSTS = gql`
  query PostByUser($username: String!) {
    postByUser(username: $username) {
      id
      title
      pubDate
      slug
      category {
        name
      }
    }
  }
`;

const DELETE_POST = gql`
  mutation RemovePost($id: ID!) {
    removePost(id: $id)
  }
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  deleteIcon: {
    color: "red",
    cursor: "pointer",
  },
});

function getAllPost(data) {
  const rows = [];
  for (let i = 0; i < data.postByUser.length; i++) {
    rows.push(
      createData(
        data.postByUser[i].id,
        data.postByUser[i].title,
        data.postByUser[i].pubDate,
        data.postByUser[i].slug,
        data.postByUser[i].category.name
      )
    );
  }
  return rows;
}

function createData(id, title, pubDate, slug, category) {
  return { id, title, pubDate, slug, category };
}

export default function AllPost(props) {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const { user } = useContext(AuthContext);

  const { loading, error, data } = useQuery(POSTS, {
    variables: {
      username: user.username,
    },
    onError: (err) => {
      if (err && err.graphQLErrors) {
        console.log(err.graphQLErrors[0].extensions.exception.errors);
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      }
    },
  });

  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted(data) {
      console.log(data);
      props.history.push("/admin");
    },

    onError: (err) => {
      console.log(err);
    },
  });

  if (loading) return <p>Loading.....</p>;
  if (error) return <Redirect to="/" />;

  let dta = [];
  if (data) {
    console.log(data.postByUser);
    dta = getAllPost(data);
  }

  const AdminPage = user ? (
    <Container>
      <Grid container spacing={3}>
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

        <Grid item xl={9} lg={9} md={8} sm={12} xs={12} align={"center"}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Published Date</TableCell>
                  <TableCell align="right">Tags</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dta.map((post, key) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {post.title}
                    </TableCell>
                    <TableCell align="right">{post.pubDate}</TableCell>
                    <TableCell align="right">{post.slug}</TableCell>
                    <TableCell align="right">{post.category}</TableCell>

                    <TableCell align="right">
                      <Link to={"/edit-post/" + post.id}>
                        <EditIcon />
                      </Link>

                      <DeleteIcon
                        className={classes.deleteIcon}
                        onClick={() => {
                          deletePost({
                            variables: {
                              id: post.id,
                            },
                          });
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Redirect to="/login" />
  );

  return AdminPage;
}
