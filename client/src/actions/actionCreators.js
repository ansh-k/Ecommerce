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

export const failureLogin = (error) => {
  return {
      type: FAILURE_LOGIN,
      user: []
  }
}

export const successGetProducts = (result) => {
  return {
    type: GET_PRODUCTS,
    Products: result
  }
}

export const successGetUser = (result) => {
  return {
    type: GET_USER,
    userinfo: result
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}

export const getOrder = (result) => {
  return {
    type: GET_ORDER,
    orders: result
  }
}



