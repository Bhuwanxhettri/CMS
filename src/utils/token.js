export const setBearerToken = (token) => {
  localStorage.setItem("token", `Bearer ${token}`);
};

export const getBearerToken = () => {
  return localStorage.getItem("token");
};
