const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserInputError, AuthenticationError } = require("apollo-server");
const Post = require("../models/Post");
const User = require("../models/User");
const { SECRET_KEY } = require("../config");
const { validateRegisterInput } = require("../utils/validators");
const { validateLoginInput } = require("../utils/validators");
const auth = require("../utils/auth");

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
    { title, username, content, category, image, slug, description },
    context
  ) {
    if (content.trim() === "") {
      throw new UserInputError("Content of the post can not be empty");
    }
    const user = auth(context);

    try {
      const newPost = new Post({
        _id: v4(),
        title,
        username,
        content,
        category,
        image,
        slug,
        description,
        pubDate: new Date().toISOString(),
      });

      const post = await newPost.save();

      return post;
    } catch (err) {
      throw new Error(err);
    }
  },

  async editPost(
    parent,
    { id, title, username, content, category, image, slug, description },
    context
  ) {
    const user = auth(context);

    try {
      const post = await Post.findById(id);
      if (post) {
        if (username === post.username) {
          const updatePost = new Post({
            title,
            content,
            category,
            image,
            slug,
            pubDate: new Date().toISOString(),
            description,
          });

          let updatedPost = await Post.findByIdAndUpdate(id, {
            $set: updatePost,
          });

          return updatedPost;
        }
        throw new Error("You are not authorised to perform this");
      }
      throw new Error("Post not found");
    } catch (err) {
      throw new Error(err);
    }
  },

  async removePost(parent, { id }, context) {
    const user = auth(context);
    try {
      const post = await Post.findById(id);
      if (post) {
        if (user.username === post.username) {
          await post.delete();
          return "Post deleted successfully";
        } else {
          return "You are not authorised to delete the post";
        }
      } else {
        return "Post not found";
      }
    } catch (err) {
      throw new Error(err);
    }
  },

  async register(
    parent,
    { registerInput: { username, email, password, cnfpassword } },
    _
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
        errors: { username: "Email already exist" },
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

  async login(parent, { email, password }, _) {
    const { errors, valid } = validateLoginInput(email, password);

    if (!valid) {
      throw new UserInputError("errors", { errors });
    }
    const user = await User.findOne({ email });

    if (!user) {
      errors.email = "User not found";
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

  async createComment(parent, { postId, content }, context) {
    const { username } = auth(context);

    if (content.trim() === "") {
      throw new UserInputError("Comment is empty", {
        errors: {
          content: "Comment must not be empty",
        },
      });
    }

    const post = await Post.findById(postId);

    if (post) {
      post.comments.unshift({
        content,
        username,
        createdAt: new Date().toISOString(),
      });

      await post.save();
      return post;
    } else {
      throw new UserInputError("Post not found");
    }
  },

  async deleteComment(parent, { postId, commentId }, context) {
    const { username } = auth(context);

    const post = await Post.findById(postId);

    if (post) {
      const commentIndex = post.comments.findIndex((c) => c.id === commentId);
      if (post.comments[commentIndex].username === username) {
        post.comments.splice(commentIndex, 1);
        await post.save();
        return post;
      } else {
        throw new AuthenticationError("User not allowed to perform this task");
      }
    } else {
      throw new UserInputError("Post not fount");
    }
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
