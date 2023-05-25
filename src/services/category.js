import http from "./axios";

const create = (data) => {
  return http.post("/category/add", data);
};
const update = (id, data) => {
  return http.put(`/category/update/${id}`, data);
};
const getAll = () => {
  return http.get("/category/getall");
};
const getOne = (id) => {
  return http.get(`/category/get/${id}`);
};
const deleteOne = (id) => {
  return http.delete(`/category/delete/${id}`);
};

export default { create, update, getAll,getOne, deleteOne };
