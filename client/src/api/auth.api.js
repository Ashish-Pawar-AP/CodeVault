import axios from "./axios";

export const loginUser = (data) => axios.post("/auth/login", data);
export const registerUser = (data) => axios.post("/auth/register", data);
export const verifyEmail = (token) =>
  axios.get(`/auth/verify-email/${token}`);
export const changePassword = (data) =>
  axios.put("/auth/change-password", data);
