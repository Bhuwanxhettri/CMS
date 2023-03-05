import api from "./index";
export const loginApi = (credentials) => {
  return api.post("/api/login", credentials);
};
