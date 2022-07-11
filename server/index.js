const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Post = require("./resolvers/Post");
const Category = require("./resolvers/Category");
const Mutation = require("./resolvers/Mutation");

const MONGODB =
  "mongodb+srv://monjul123:monjul123@cluster0.emzy2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Post,
    Category,
    Mutation,
  },
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: process.env.PORT || 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });
