import React from "react";
import { useQuery, gql } from "@apollo/client";
import "../../assets/css/post.css";

const POSTS = gql`
  query Post {
    posts {
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

export default function AllPost() {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <div className="post">
      {data.posts.map((post, index) => {
        return (
          <div key={index}>
            <h1>{post.title}</h1>
            <img src={post.image} />
            <span dangerouslySetInnerHTML={{ __html: post.content }} />
            <p>Tages: {post.slug}</p>
          </div>
        );
      })}
    </div>
  );
}
