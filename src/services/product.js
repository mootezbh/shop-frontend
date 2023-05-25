import http from "./axios";

const create = (data) => {
  return http.post("/product/add", data);
};
const update = (id, data) => {
  return http.put(`/product/update/${id}`, data);
};
const getAll = () => {
  return http.get("/product/getall");
};
const getOne = (id) => {
  return http.get(`/product/get/${id}`);
};
const deleteOne = (id) => {
  return http.delete(`/product/delete/${id}`);
};

export default { create, update, getAll,getOne, deleteOne };
