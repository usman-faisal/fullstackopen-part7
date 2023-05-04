import { useEffect } from "react";
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import Toggleable from "./components/Toggleable";
import { useDispatch, useSelector } from "react-redux";
import { initializeBlogs } from "./features/blogsSlice";
import { initializeUser } from "./features/userSlice";
import UserList from "./components/UserList";
import { Route, Routes, useMatch } from "react-router-dom";
import BlogWrapper from "./components/BlogWrapper";
import UserDetails from "./components/UserDetails";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const blogs = useSelector((state) => state.blogs);

  const userMatch = useMatch("/users/:id")?.params?.id;
  const userDetailsToShow =
    userMatch &&
    users.find((user) => user.id.toString() === userMatch.toString());

  const blogMatch = useMatch("/blogs/:id")?.params?.id;
  const blogDetailsToShow =
    blogMatch &&
    blogs.find((blog) => blog.id.toString() === blogMatch.toString());

  useEffect(() => {
    dispatch(initializeUser());
    dispatch(initializeBlogs());
  }, []);

  return (
    <div>
      <Navbar />
      <Notification />
      {!user && (
        <Toggleable buttonLabel="login">
          <LoginForm />
        </Toggleable>
      )}
      <Routes>
        <Route element={<UserList />} path="/users" />
        <Route
          element={<UserDetails user={userDetailsToShow} />}
          path="/users/:id"
        />
        <Route element={<Blog blog={blogDetailsToShow} />} path="/blogs/:id" />
        <Route element={<BlogWrapper />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
