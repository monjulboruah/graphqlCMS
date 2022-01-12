const { gql } = require("apollo-server");

const typeDefs = gql`
  type Blog {
    id: ID!
    posts: [Post!]!
    categories: [Category!]!
  }

  type Post {
    id: ID!
    username: String!
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

  input RegisterInput {
    username: String!
    password: String!
    cnfpassword: String!
    email: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    created: String!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    content: String!
  }

  type Query {
    posts: [Post!]!
    post(slug: String!): [Post!]
    postByUser(username: String!): [Post]
    postById(id: ID!): Post
    categories: [Category!]!
    category(slug: String!): [Category!]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    createPost(
      title: String!
      username: String!
      description: String!
      content: String!
      image: String!
      slug: String!
      category: String!
    ): Post
    removePost(id: ID!): String!
    editPost(
      id: ID!
      username: String!
      title: String!
      description: String!
      content: String!
      image: String!
      slug: String!
      category: String!
    ): Post
    createComment(postId: String!, content: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
  }
`;

module.exports = typeDefs;
