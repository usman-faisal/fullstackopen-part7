import React from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";
import { Button, Flex } from "@mantine/core";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <nav>
      <Flex gap={10} align="center">
        <li>
          <Button>
            <Link to="/">Blogs</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/users">Users</Link>
          </Button>
        </li>
        {user && (
          <li>
            <UserInfo />
          </li>
        )}
      </Flex>
    </nav>
  );
};

export default Navbar;
