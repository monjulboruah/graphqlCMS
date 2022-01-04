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
});

module.exports = model("Post", postSchema);
