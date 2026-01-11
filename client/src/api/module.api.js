import axios from "./axios";

export const getModules = () => axios.get("/auth/v1/modules");
export const createModule = (data) => axios.post("/auth/v1/modules", data);
export const deleteModule = (id) => axios.delete(`/auth/v1/modules/${id}`);
