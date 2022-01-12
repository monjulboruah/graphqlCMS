import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Cards from "../Cards";

const POSTS = gql`
  query Post {
    posts {
      title
      image
      description
    }
  }
`;

export default function AllPost() {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <Container>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} align={"center"}>
          <Grid container spacing={6}>
            {data.posts.map((post, index) => {
              return (
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                  align={"center"}
                  id={index}
                >
                  <Cards
                    image={post.image}
                    title={post.title}
                    description={post.description}
                  />

                  {/* <span dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
