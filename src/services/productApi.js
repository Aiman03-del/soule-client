import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = "https://soule-backend-h8dn.onrender.com/products";

const getToken = () => {
  return localStorage.getItem("access_token");
};

const handleTokenError = (error) => {
  if (
    error.response &&
    (error.response.status === 401 || error.response.status === 403)
  ) {
    toast.error("Please login. Your token is expired.", { position: "top-center" });
    localStorage.removeItem("access_token");
  }
  throw error;
};

export const getProducts = () => {
  const token = getToken();
  return axios
    .get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleTokenError);
};

export const createProduct = (data) => {
  const token = getToken();
  return axios
    .post(BASE_URL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleTokenError);
};

export const updateProduct = (id, data) => {
  const token = getToken();
  return axios
    .put(`${BASE_URL}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleTokenError);
};

export const deleteProduct = (id) => {
  const token = getToken();
  return axios
    .delete(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch(handleTokenError);
};
