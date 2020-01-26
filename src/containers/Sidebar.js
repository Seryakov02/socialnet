import React from "react";
import { connect } from "react-redux";

import Sidebar from "../components/Sidebar";
import { logout } from "../store/actions/authActions";

const SidebarContainer = props => <Sidebar {...props} />;

const mapStateToProps = state => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { logout })(SidebarContainer);
