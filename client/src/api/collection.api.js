import axios from "./axios";

export const getCollections = () => axios.get("/collection");
export const createCollection = (data) =>
  axios.post("/collection", data);
export const deleteCollection = (id) =>
  axios.delete(`/collection/${id}`);
