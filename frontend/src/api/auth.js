import axios from "axios";

const API = axios.create({
  baseURL: "https://smit-final-heckathon-qitmeer-backend.vercel.app/api/users",
});

export const login = (formData) => API.post("/login", formData);
export const register = (formData) => API.post("/register", formData);
