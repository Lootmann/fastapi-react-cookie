import axios from "axios";

export const getCookie = () => {};

export const axiosApi = axios.create({
  baseURL: "http://localhost:8888",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
