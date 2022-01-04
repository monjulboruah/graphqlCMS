const Blog = {
  id: (parent, args, _) => "1",
  posts: (parent, args, { posts }) => posts,
  categories: (parent, args, { categories }) => categories,
};

module.exports = Blog;
