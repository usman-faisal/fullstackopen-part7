import React, { useState } from "react";
import { loginUser } from "../features/userSlice";
import { setNotification } from "../features/notificationSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        loginUser({
          username,
          password,
        })
      );
      setUsername("");
      setPassword("");
    } catch (error) {
      dispatch(setNotification(error.response.data.error, "error"));
    }
  };

  return (
    <form id="form-login" onSubmit={handleLogin}>
      <h2>Login to application</h2>
      <div>
        <label>username</label>
        <input
          type="text"
          value={username}
          id="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id="login-btn">Login</button>
    </form>
  );
};

export default LoginForm;
