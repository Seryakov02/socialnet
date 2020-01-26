import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { initializeApp } from "./store/actions/appActions";
import Sidebar from "./containers/Sidebar";
import LoginForm from "./components/LoginForm";
import Users from "./containers/Users";
import Preloader from "./common/Preloader";

const Profile = React.lazy(() => import("./containers/Profile"));
const Dialogs = React.lazy(() => import("./containers/Dialogs"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <Sidebar />
        <div className="wrapper__pages">
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route
              path="/profile/:userId?"
              render={() => {
                return (
                  <React.Suspense fallback={<Preloader />}>
                    <Profile />
                  </React.Suspense>
                );
              }}
            />
            <Route
              path="/im"
              render={() => {
                return (
                  <React.Suspense fallback={<Preloader />}>
                    <Dialogs />
                  </React.Suspense>
                );
              }}
            />
            <Route path="/users" render={() => <Users />} />
            <Route path="/login" render={() => <LoginForm />} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
