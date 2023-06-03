import axios, { type AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
});
