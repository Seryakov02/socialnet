import { INITIALIZED_SUCCESS } from "../types";
import { getUserData } from "./authActions";

export const initializeApp = () => dispatch => {
  let promise = dispatch(getUserData());
  Promise.all([promise]).then(() => {
    dispatch({ type: INITIALIZED_SUCCESS });
  });
};
