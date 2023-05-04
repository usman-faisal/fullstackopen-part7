import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const props = useSelector((state) => state.notification);
  console.log(props);
  if (!props.text || !props.type) return null;

  return (
    <div className={props.type === "error" ? "error" : "success"}>
      <p>{props.text}</p>
    </div>
  );
};

export default Notification;
