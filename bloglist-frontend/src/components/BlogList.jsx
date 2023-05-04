import React from "react";
import { useSelector } from "react-redux";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const sortedBlogs = blogs.slice().sort((a, b) => {
    return b?.likes - a?.likes;
  }, blogs[0]);
  return (
    <>
      <h2>blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
