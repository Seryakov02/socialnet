import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import Profile from "../components/Profile";
import {
  setUserProfile,
  getUserProfile,
  getStatus,
  updateStatus
} from "../store/actions/profileActions";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getStatus,
    updateStatus
  }),
  withRouter
)(ProfileContainer);
