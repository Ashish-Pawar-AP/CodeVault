import axios from "./axios";

export const getCollections = () => axios.get("/auth/collections");
export const createCollection = (data) =>
  axios.post("/auth/collections", data);
export const deleteCollection = (id) =>
  axios.delete(`/auth/collections/${id}`);
