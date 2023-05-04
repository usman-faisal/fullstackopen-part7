import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/userSlice";
import { Badge, Button, Flex } from "@mantine/core";

const UserInfo = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeUser());
  };
  return (
    <Flex ml="auto" align="center">
      <Button onClick={logout}>Logout</Button>
      <Badge ml="auto">{user.username} logged in</Badge>
    </Flex>
  );
};

export default UserInfo;
