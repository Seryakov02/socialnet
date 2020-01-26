import { INITIALIZED_SUCCESS } from "../types";

const defaultState = {
  initialized: null
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export default appReducer;
