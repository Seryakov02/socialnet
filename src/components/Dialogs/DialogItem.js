import React from "react";
import { Link } from "react-router-dom";

const DialogItem = props => {
  return (
    <div style={{ padding: "5px 0px" }}>
      <Link to={"/im/" + props.id}>
        <p>{props.name}</p>
      </Link>
    </div>
  );
};

export default DialogItem;