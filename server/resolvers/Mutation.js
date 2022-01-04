const { v4 } = require("uuid");
const Post = require("../models/Post");

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
