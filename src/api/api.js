import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "32b355ef-2996-4cfd-a32d-b063f1403f9d"
  }
});

export const authApi = {
  me() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then(response => response.data);
  }
};

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  getUserProfile(userId) {
    return profileApi.getUserProfile(userId);
  },
  loginAuth(login) {
    return instance.post(`auth/${login}`).then(response => response.data);
  }
};

export const profileApi = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId).then(response => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId)
      .then(response => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status })
      .then(response => response.data);
  }
};
