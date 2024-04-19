import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com/"});

api.interceptors.request.use(
    (Response) => Response.data,
    (error) => Promise.reject(error)
);

export default api;