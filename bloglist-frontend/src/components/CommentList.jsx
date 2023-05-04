import React, { useState } from "react";
import { addComment } from "../features/blogsSlice";
import { useDispatch } from "react-redux";
import { Button, Flex, Input } from "@mantine/core";

const CommentList = ({ blog }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  return (
    <>
      <h3>Comments</h3>
      <Flex>
        <Input type="text" onChange={(e) => setComment(e.target.value)} />
        <Button onClick={() => dispatch(addComment(blog, comment))}>add</Button>
      </Flex>
      <Flex direction="column">
        {blog.comments.map((comment, index) => (
          <span key={index}>{comment}</span>
        ))}
      </Flex>
    </>
  );
};

export default CommentList;
