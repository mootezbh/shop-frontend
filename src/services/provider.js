import http from "./axios";

const create = (data) => {
  return http.post("/provider/add", data);
};
const update = (id, data) => {
  return http.put(`/provider/update/${id}`, data);
};
const getAll = () => {
  return http.get("/provider/getall");
};
const getOne = (id) => {
  return http.get(`/provider/get/${id}`);
};
const deleteOne = (id) => {
  return http.delete(`/provider/delete/${id}`);
};
const accept = (data) => {
  return http.post(`/provider/accept/`, data);
};

export default { create, update, getAll,getOne, deleteOne, accept };
