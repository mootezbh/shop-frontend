import http from "./axios";

const login = (data) => {
  return http.post("/login", data);
};
const logout = (data) => {
  return http.post("/logout", data);
};
const forgot = (data) => {
  return http.post("/forgot", data);
};
const reset = (id, data) => {
  return http.post(`/reset/${id}`, data);
};
export default { login, forgot, reset,logout };
