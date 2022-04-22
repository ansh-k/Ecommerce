import axios from "axios";
import { API_BASE_URL } from "../config/config";

// ALl Carts actions start
//cart code below

export const getCarts = () => {
  const token = localStorage.getItem("token");
  return axios({
    method: "GET",
    url: `${API_BASE_URL}/carts`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// add to Cart code below 

export const addToCart = (data) => {
  const token = localStorage.getItem("token");
  return axios({
    method: "POST",
    url: `${API_BASE_URL}/cart/${data.id}`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// remove cart code below

export const removeCart = (id) => {
  const token = localStorage.getItem("token");
  return axios({
    method: "DELETE",
    url: `${API_BASE_URL}/cart`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: { id },
  });
};

//  Update Cart code below

export const updateCart = ({ id, quantity }) => {
  const token = localStorage.getItem("token");
  return axios({
    method: "PATCH",
    url: `${API_BASE_URL}/cart/${id}`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: { quantity: quantity },
  });
};

// ALl Carts actions end
//product code below

export const getProducts = () => {
  const token = localStorage.getItem("token");

  return axios({
    method: "GET",
    url: `${API_BASE_URL}/products`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

//orders code below

export const getOrders = () => {
  const token = localStorage.getItem("token");

  return axios({
    method: "GET",
    url: `${API_BASE_URL}/orders`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

//user code below

export const userLogin = (user) => {
  return axios({
    method: "POST",
    url: `${API_BASE_URL}/login`,
    headers: {
      "Content-type": "application/json",
    },
    data: user,
  });
};

// user register code below

export const userRegister = (newUser) => {
  return axios({
    method: "POST",
    url: `${API_BASE_URL}/register`,
    headers: {
      "Content-type": "application/json",
    },
    data: newUser,
  });
};

export const getUserApi = (token) => {
  return axios({
    method: "GET",
    url: `${API_BASE_URL}/user`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
