import * as constants from "../constant";

//cart
const cartReducer = (state, action) => ({
  ...state,
  cartItem: action.CartList,
});

//get-user
const requestLoginUser = (state, action) => ({
  ...state,
  user: [],
});

const successLoginUser = (state, action) => ({
  ...state,
  user: action.user,
});

const failLoginUser = (state, action) => ({
  ...state,
  user: [],
});

//product
const productReducer = (state, action) => ({
  ...state,
  products: action?.Products,
});

//order
const getOrder = (state, action) => ({
  ...state,
  orders: action?.orders,
});

//user
const getUser = (state, action) => ({
  ...state,
  userData: action.userData,
  isLoggedIn: true,
});

const clearUser = (state, action) => ({
  ...state,
  userData: null,
  isLoggedIn: false,
});

export const setReducer = {
  [constants.GET_CARTS]: cartReducer,
  [constants.REQUEST_LOGIN]: requestLoginUser,
  [constants.SUCCESS_LOGIN]: successLoginUser,
  [constants.FAILURE_LOGIN]: failLoginUser,
  [constants.GET_PRODUCTS]: productReducer,
  [constants.GET_USER]: getUser,
  [constants.CLEAR_USER]: clearUser,
  [constants.GET_ORDER]: getOrder,
};
