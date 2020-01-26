import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Checkbox } from "antd";

import { Input, createField } from "../../common/FormsControls";
import { required } from "../../utils/validate";
import { login } from "../../store/actions/authActions";
import { styleBtn, styleField } from "../../common/FormsControls";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input, null, null, styleField)}
      {createField(
        "Password",
        "password",
        [required],
        Input,
        {
          type: "password"
        },
        null,
        styleField
      )}
      {createField(
        null,
        "rememberMe",
        [],
        Checkbox,
        {
          type: "checkbox"
        },
        " Remember me"
      )}
      {error && <div>{error}</div>}
      <div>
        <button style={styleBtn}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
