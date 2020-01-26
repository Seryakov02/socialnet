import { SET_USER_DATA } from "../types";
import { stopSubmit } from "redux-form";
import { authApi } from "../../api/api";

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});

export const getUserData = () => async dispatch => {
  let data = await authApi.me();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async dispatch => {
  let data = await authApi.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getUserData());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async dispatch => {
  let data = await authApi.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
