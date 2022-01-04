const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  _id: String,
  name: String,
  slug: String,
});

module.exports = model("Category", categorySchema);
