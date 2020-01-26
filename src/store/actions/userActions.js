import { usersApi } from "../../api/api";

import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS
} from "../types";

export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
});

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (page, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true));
  let data = await usersApi.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setCurrentPage(page));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = userId => async dispatch => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersApi.follow.bind(usersApi),
    followSuccess
  );
};

export const unfollow = userId => async dispatch => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersApi.unfollow.bind(usersApi),
    unfollowSuccess
  );
};
