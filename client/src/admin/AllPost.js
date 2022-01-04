import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
  query Post {
    posts {
      id
      title
      content
      category {
        name
      }
      image
      slug
      pubDate
      description
    }
  }
`;

const DELETE_POST = gql`
  mutation RemovePost($id: ID!) {
    removePost(id: $id) {
      id
    }
  }
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, title, pubDate, slug, category) {
  return { id, title, pubDate, slug, category };
}

export default function AllPost(props) {
  const classes = useStyles();

  const { loading, error, data } = useQuery(POSTS);
  const [deletePost, { dataRemove, loadingRemove, errorRemove }] =
    useMutation(DELETE_POST);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  const rows = [];

  function getAllPost(rows, data) {
    for (let i = 0; i < data.posts.length; i++) {
      rows.push(
        createData(
          data.posts[i].id,
          data.posts[i].title,
          data.posts[i].pubDate,
          data.posts[i].slug,
          data.posts[i].category.name
        )
      );
    }
  }

  getAllPost(rows, data);

  return (
    <>
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
              <TableCell align="right">Slug</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((post, key) => (
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
    </>
  );
}
