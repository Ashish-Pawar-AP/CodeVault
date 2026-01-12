import axios from "./axios";

export const getSnippets = () => axios.get("/auth/snippets");
export const createSnippet = (data) => axios.post("/auth/snippets", data);
export const getSnippet = (id) => axios.get(`/auth/snippets/${id}`);
export const updateSnippet = (id, data) =>
  axios.put(`/auth/snippets/${id}`, data);
export const deleteSnippet = (id) => axios.delete(`/auth/snippets/${id}`);
export const copySnippet = (id) => axios.post(`/auth/snippets/${id}/copy`);
