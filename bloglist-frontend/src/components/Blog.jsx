import { addComment, likeBlog, removeBlog } from "../features/blogsSlice";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../features/notificationSlice";
import { useState } from "react";
import CommentList from "./CommentList";
import { Title } from "@mantine/core";
const Blog = ({ blog }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (!blog) return;
  const handleRemoveClick = async () => {
    const confirm = window.confirm(
      `Remove blog ${blog.title} by ${blog.author}`
    );
    if (!confirm) return;
    try {
      await dispatch(removeBlog(blog.id));
      dispatch(
        setNotification(
          `Blog ${blog.title} by ${blog.author} remove`,
          "success"
        )
      );
    } catch (err) {
      dispatch(setNotification(err.response.data.error, "error"));
    }
  };

  const handleLikeClick = async () => {
    try {
      await dispatch(likeBlog(blog));
    } catch (err) {
      dispatch(setNotification(err.response.data.error, "error"));
    }
  };

  return (
    <div className="blog">
      <Title>
        {blog.title} by {blog.author}{" "}
      </Title>
      <div className="content">
        <a href={blog.url}>{blog.url}</a>
        <p>likes:</p> <span className="likes">{blog.likes}</span>
        <button className="like-btn" onClick={handleLikeClick}>
          Like
        </button>
      </div>
      {user && user.username === blog.user.username && (
        <button onClick={handleRemoveClick}>remove</button>
      )}
      <CommentList blog={blog} />
    </div>
  );
};

export default Blog;
