const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserInputError } = require("apollo-server");
const Post = require("../models/Post");
const User = require("../models/User");
const { SECRET_KEY } = require("../config");
const { validateRegisterInput } = require("../utils/validators");
const { validateLoginInput } = require("../utils/validators");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "1hr" }
  );
}

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

    const token = generateToken(res);

    return {
      ...res._doc,
      id: res._id,
      token,
    };
  },

  async login(parent, { email, password }, context) {
    const { errors, valid } = validateLoginInput(email, password);

    if (!valid) {
      throw new UserInputError("errors", { errors });
    }
    const user = await User.findOne({ email });

    if (!user) {
      errors.general = "User not found";
      throw new UserInputError("User not found", { errors });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      errors.general = "Wrong password";
      throw new UserInputError("Wrong password", { errors });
    }

    const token = generateToken(user);

    return {
      ...user._doc,
      id: user._id,
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
