import axios from "axios";
import { getBearerToken } from "../utils/token";

const api = axios.create({
  baseURL: "",
  headers: {
    Authorization: getBearerToken(),
    "Content-Type": "application/json",
  },
});

export default api;
