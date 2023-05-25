import http from "./axios"

const create = (data) => {
    return http.post("/subcategory/add",data)
}
const update = (id,data) => {
    return http.put(`/subcategory/update/${id}`,data)
}
const getAll = () => {
    return http.get("/subcategory/getall")
}
const getOne = (id) => {
    return http.get(`/subcategory/get/${id}`);
  };
  const deleteOne = (id) => {
    return http.delete(`/subcategory/delete/${id}`);
  };
export default {create, update, getAll, getOne,deleteOne}