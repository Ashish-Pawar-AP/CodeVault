import axios from "./axios";

export const getModules = () => axios.get("/auth/modules");
export const createModule = (data) => axios.post("/auth/modules", data);
export const deleteModule = (id) => axios.delete(`/auth/modules/${id}`);
