const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  _id: String,
  title: String,
  content: String,
  pubDate: String,
  image: String,
  slug: String,
  category: String,
  description: String,
  username: String,
  comments: [
    {
      content: String,
      username: String,
      createdAt: String,
    },
  ],
});

module.exports = model("Post", postSchema);
