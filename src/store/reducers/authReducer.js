import { SET_USER_DATA } from "../types";

const defaultState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
