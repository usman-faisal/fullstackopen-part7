import React from "react";
import { addBlog } from "../features/blogsSlice";
import { setNotification } from "../features/notificationSlice";
import { useDispatch } from "react-redux";

const BlogForm = (props) => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [url, setUrl] = React.useState("");
  const dispatch = useDispatch();
  const createBlog = async (payload) => {
    try {
      dispatch(addBlog(payload));
      props.blogFormRef.current.toggleVisibility();
      dispatch(
        setNotification({
          text: `a new blog ${payload.title} by ${payload.author} added`,
          type: "success",
        })
      );
    } catch (error) {
      dispatch(
        setNotification({
          text: error.response.data.error,
          type: "error",
        })
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog({ title, author, url });
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>create new</h2>
      <div>
        <label>title:</label>
        <input
          value={title}
          placeholder="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>author:</label>
        <input
          value={author}
          placeholder="author"
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>url:</label>
        <input
          value={url}
          id="url"
          placeholder="url"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button id="create-btn">create</button>
    </form>
  );
};

export default BlogForm;
