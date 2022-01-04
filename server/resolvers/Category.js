const Post = require("../models/Post");

const Category = {
  async posts(parent, args, _) {
    const post = await Post.find({ category: parent.id });

    return post;
  },
};

module.exports = Category;
