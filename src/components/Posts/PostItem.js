import React from "react";
import user from "../../assets/img/user.png";
import remove from "../../assets/img/remove.svg";

const PostItem = ({ message, deletePost, id }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <img
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
        src={user}
        alt="Post"
      />
      <p style={{ marginRight: "80px" }}>{message}</p>
      <img
        style={{ cursor: "pointer" }}
        onClick={() => deletePost(id)}
        src={remove}
        alt="remove"
      />
    </div>
  );
};

export default PostItem;
