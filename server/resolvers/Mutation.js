const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserInputError } = require("apollo-server");
const Post = require("../models/Post");
const User = require("../models/User");
const { SECRET_KEY } = require("../config");
const { validateRegisterInput } = require("../utils/validators");

const Mutation = {
  async createPost(
    parent,
    { title, content, category, image, slug, pubDate, description },
    _
  ) {
    let newPost = new Post({
      _id: v4(),
      title,
      content,
      category,
      image,
      slug,
      pubDate,
      description,
    });

    const post = await newPost.save();

    return post;
  },

  async editPost(
    parent,
    { id, title, content, category, image, slug, pubDate, description },
    _
  ) {
    let updatePost = new Post({
      _id: id,
      title,
      content,
      category,
      image,
      slug,
      pubDate,
      description,
    });

    let updatedPost = await Post.findByIdAndUpdate(id, {
      $set: updatePost,
    });

    return updatedPost;
  },

  async removePost(parent, { id }, _) {
    const post = await Post.findById(id);
    await post.delete();
    return post;
  },

  async register(
    parent,
    { registerInput: { username, email, password, cnfpassword } },
    context
  ) {
    const { valid, errors } = validateRegisterInput(
      username,
      email,
      password,
      cnfpassword
    );

    if (valid === false) {
      throw new UserInputError("Errors", { errors });
    }
    const user = await User.findOne({ email });

    if (user) {
      throw new UserInputError("Email already exist", {
        error: { username: "Email already exist" },
      });
    }

    password = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      password,
      username,
      created: new Date().toISOString(),
    });

    const res = await newUser.save();

    const token = jwt.sign(
      {
        id: res.id,
        email: res.email,
        username: res.username,
      },
      SECRET_KEY,
      { expiresIn: "1hr" }
    );

    return {
      ...res._doc,
      id: res._id,
      token,
    };
  },
};

module.exports = Mutation;

// type Post {
//     id: ID!
//     title: String!
//     content: String!
//     category: Category
//     image: String!
//     slug: String!
//     pubDate: String!
//     description: String!
//   }
