import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import userPhoto from "../../assets/img/user.png";

const User = ({
  user,
  followingInProgress,
  unfollow,
  follow,
  authorizedUserId
}) => {
  const styleButton = {
    padding: "0 5px"
  };
  return (
    <div style={{ display: "flex", marginBottom: "10px" }}>
      <span style={{ marginRight: "20px" }}>
        <div style={{ marginBottom: "3px" }}>
          <Link to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              alt={user.fullName}
            />
          </Link>
        </div>
        {user.followed ? (
          <Button
            style={styleButton}
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            style={styleButton}
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => {
              if (user.id === authorizedUserId) {
                return undefined;
              }
              follow(user.id);
            }}
          >
            Follow
          </Button>
        )}
      </span>
      <span>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
          <div>user.location.country</div>
          <div>user.location.city</div>
        </div>
      </span>
    </div>
  );
};

export default User;
