import React from "react";
import { connect } from "react-redux";

import Users from "../components/Users";
import Preloader from "../common/Preloader";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers
} from "../store/actions/userActions";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = pageNumber => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          isFetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
          authorizedUserId={this.props.authorizedUserId}
        />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    authorizedUserId: state.auth.userId
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers
})(UsersContainer);
