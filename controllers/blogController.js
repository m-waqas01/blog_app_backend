import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, author: req.user.id });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  const blogs = await Blog.find().populate("author", "name");
  res.json(blogs);
};

export const updateBlog = async (req, res) => {
  const blogs = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(blogs);
};

export const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted successfully" });
};
