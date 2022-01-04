const Category = require("../models/Category");
const Post = {
  async category(parent, args, _) {
    const category = await Category.find({ _id: parent.category });

    return category[0];
  },
};

module.exports = Post;
