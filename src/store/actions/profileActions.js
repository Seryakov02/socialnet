import {
  ACCEPT_POST,
  SET_USER_PROFILE,
  SET_STATUS,
  DELETE_POST
} from "../types";
import { usersApi, profileApi } from "../../api/api";

export const addPost = newPostText => ({
  type: ACCEPT_POST,
  newPostText
});

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export const setStatus = status => ({
  type: SET_STATUS,
  status
});

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
});

export const getUserProfile = userId => async dispatch => {
  let data = await usersApi.getUserProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = userId => async dispatch => {
  let data = await profileApi.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = status => async dispatch => {
  let data = await profileApi.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
