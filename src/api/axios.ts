import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default axios.create({ baseURL: BASE_URL });

export const authJsonHeader = (file?: boolean) => ({
  "Content-Type": file ? "multipart/form-data" : "Application/json",
  Accept: "application/json",
});
