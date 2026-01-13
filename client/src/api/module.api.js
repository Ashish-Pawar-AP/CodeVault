import axios from "./axios";

export const getModules = () => axios.get("/modules");
export const createModule = (data) => axios.post("/modules", data);
export const deleteModule = (id) => axios.delete(`/modules/${id}`);
