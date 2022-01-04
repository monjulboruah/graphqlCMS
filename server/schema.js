const { gql } = require("apollo-server");

const typeDefs = gql`
  type Blog {
    id: ID!
    posts: [Post!]!
    categories: [Category!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    category: Category
    image: String!
    slug: String!
    pubDate: String!
    description: String!
  }

  type Category {
    id: ID!
    name: String
    posts: [Post!]!
    slug: String
  }

  type Query {
    posts: [Post!]!
    post(slug: String!): [Post!]
    postById(id: ID!): Post
    categories: [Category!]!
    category(slug: String!): [Category!]
  }

  type Mutation {
    createPost(
      title: String!
      category: Category
      description: String!
      content: String!
      image: String!
      pubDate: String!
      slug: String!
      category: String!
    ): Post
    removePost(id: ID!): Post
    editPost(
      id: ID!
      title: String!
      category: Category
      description: String!
      content: String!
      image: String!
      pubDate: String!
      slug: String!
      category: String!
    ): Post
  }
`;

module.exports = typeDefs;