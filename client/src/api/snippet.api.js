import axios from "./axios";

export const getSnippets = () => axios.get("/auth/v1/snippets");
export const createSnippet = (data) => axios.post("/auth/v1/snippets", data);
export const getSnippet = (id) => axios.get(`/auth/v1/snippets/${id}`);
export const updateSnippet = (id, data) =>
  axios.put(`/auth/v1/snippets/${id}`, data);
export const deleteSnippet = (id) => axios.delete(`/auth/v1/snippets/${id}`);
export const copySnippet = (id) => axios.post(`/auth/v1/snippets/${id}/copy`);
