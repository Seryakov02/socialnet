import React from "react";

import Pagination from "../../common/Pagination";
import User from "./User";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  authorizedUserId,
  ...props
}) => {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          authorizedUserId={authorizedUserId}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Users;
