const mongoose = require("mongoose");
const Post = require("../models/Post");
const Category = require("../models/Category");

const Query = {
  async posts() {
    try {
      const posts = await Post.find().sort({ pubDate: -1 });
      return posts;
    } catch (err) {
      throw new Error(err);
    }
  },
  async post(parent, { slug }, _) {
    try {
      const post = await Post.find({ slug: slug });
      if (post) {
        return post;
      } else {
        throw new Error("Post not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  },
  async postById(parent, { id }, _) {
    try {
      const post = await Post.findById(id);
      if (post) {
        return post;
      } else {
        throw new Error("Post not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  },

  async postByUser(parent, { username }, _) {
    try {
      const post = await Post.find({ username: username });
      if (post) {
        return post;
      } else {
        throw new Error("Post not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  },
  async categories() {
    try {
      const categories = await Category.find();
      return categories;
    } catch (err) {
      throw new Error(err);
    }
  },
  async category(parent, { slug }, _) {
    try {
      const category = await Category.find({ slug: slug });
      if (category) {
        return category;
      } else {
        throw new Error("Category not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  },
};

module.exports = Query;
