import axios from "./axios";

export const getCollections = () => axios.get("/auth/v1/collections");
export const createCollection = (data) =>
  axios.post("/auth/v1/collections", data);
export const deleteCollection = (id) =>
  axios.delete(`/auth/v1/collections/${id}`);
