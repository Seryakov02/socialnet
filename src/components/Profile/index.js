import React from "react";

import Info from "./Info";
import Posts from "../../containers/Posts";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div>
      <Info profile={profile} status={status} updateStatus={updateStatus} />
      <Posts />
    </div>
  );
};

export default Profile;
