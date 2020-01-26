import React from "react";

import Preloader from "../../common/Preloader";
import user from "../../assets/img/user.png";
import Status from "./Status";

const Info = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      {props.profile.photos.small ? (
        <img src={props.profile.photos.small} alt="User icon" />
      ) : (
        <img
          style={{ width: "50px", height: "50px" }}
          src={user}
          alt="User icon"
        />
      )}
      <Status status={props.status} updateStatus={props.updateStatus} />
      <div>
        <b>Full name: </b>
        {props.profile.fullName}
      </div>
    </div>
  );
};

export default Info;
