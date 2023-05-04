import React from "react";
import { Link } from "react-router-dom";

const UserDetails = ({ user }) => {
  if (!user) return;
  console.log(user);
  return (
    <div>
      <h2>{user.username}</h2>
      <h3>added blogs</h3>
      <ul>
        {user.blogs.map((blog) => {
          return (
            <li key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserDetails;
