import React, { useRef } from "react";
import Toggleable from "./Toggleable";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import { useSelector } from "react-redux";

const BlogWrapper = () => {
  const blogFormRef = useRef();
  const user = useSelector((state) => state.user);
  return (
    <>
      {user && (
        <Toggleable ref={blogFormRef} buttonLabel="create new">
          <BlogForm blogFormRef={blogFormRef} />
        </Toggleable>
      )}
      <BlogList />
    </>
  );
};

export default BlogWrapper;
