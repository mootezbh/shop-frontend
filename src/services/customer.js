import http from "./axios";

const create = (data) => {
  return http.post("/customer/add", data);
};
const update = (id, data) => {
  return http.put(`/customer/update/${id}`, data);
};
const getAll = () => {
  return http.get("/customer/getall");
};
const getOne = (id) => {
  return http.get(`/customer/get/${id}`);
};
const deleteOne = (id) => {
  return http.delete(`/customer/delete/${id}`);
};


export default { create, update, getAll,getOne, deleteOne };
