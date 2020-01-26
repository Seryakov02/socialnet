import {
  ACCEPT_POST,
  SET_USER_PROFILE,
  SET_STATUS,
  DELETE_POST
} from "../types";

const defaultState = {
  posts: [
    { id: 1, message: "Test" },
    { id: 2, message: "Test" }
  ],
  newPostText: "",
  profile: null,
  status: ""
};

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACCEPT_POST: {
      let newPost = {
        id: Math.random(),
        message: action.newPostText
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.postId)
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
