const posts = [
    {
      id: "1",
      title: "The biggest and most awesome camera of year",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined g to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator..",
      category: "1",
      pubDate: "29 march 2020",
      image:
        "https://media.istockphoto.com/photos/love-working-from-home-picture-id1182641010",
      pubDate: "29 march 2020",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      slug: "camera",
    },

    {
      id: "2",
      title: "What 3 years of android taught me the hard way",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined g to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator..",
      category: "2",
      pubDate: "29 march 2020",
      image:
        "https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1289323170",
      pubDate: "29 march 2020",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      slug: "lorem",
    },
    {
      id: "3",
      title: "The biggest and most awesome camera of year",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined g to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator..",
      category: "3",
      pubDate: "29 march 2020",
      image:
        "https://media.istockphoto.com/photos/love-working-from-home-picture-id1182641010",
      pubDate: "29 march 2020",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      slug: "ipsum",
    },
    {
      id: "4",
      title: "The biggest and most awesome camera of year",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined g to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator..",
      category: "1",
      pubDate: "29 march 2020",
      image:
        "https://media.istockphoto.com/photos/love-working-from-home-picture-id1182641010",
      pubDate: "29 march 2020",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      slug: "current",
    },
  ],
  categories = [
    {
      id: "1",
      name: "Tech",
      slug: "tech",
    },
    {
      id: "2",
      name: "Stocks",
      slug: "stock",
    },
    {
      id: "3",
      name: "Current Affairs",
      slug: "current-affair",
    },
  ];

const blog = {
  id: "1",
  posts: posts,
  categories: categories,
};

module.exports = {
  blog,
  posts,
  categories,
};
