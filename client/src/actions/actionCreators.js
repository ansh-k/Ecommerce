import {
  GET_CARTS,
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  GET_PRODUCTS,
  GET_USER,
  CLEAR_USER,
  GET_ORDER,
} from "../constant";

export const successGetCarts = (result) => {
  return {
      type: GET_CARTS,
      CartList: result
  }
}

export const requestLogin = () => {
  return {
      type: REQUEST_LOGIN,
      user: []
  }
}

export const successLogin = (result) => {
  return {
      type: SUCCESS_LOGIN,
      user: result
  }
}

export const failureLogin = () => {
  return {
      type: FAILURE_LOGIN,
      user: []
  }
}

export const successGetProducts = (payload) => {
  return {
    type: GET_PRODUCTS,
    Products: payload
  }
}

export const successGetUser = (payload) => {
  return {
    type: GET_USER,
    userData: payload
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}

export const getOrder = (payload) => {
  return {
    type: GET_ORDER,
    orders: payload
  }
}



