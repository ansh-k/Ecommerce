import * as actions from "./actionCreators";
import { toast } from "react-toastify";
import { getCarts, getProducts, getUserApi, getOrders } from "./integrations";

export const getAllCarts = () => (dispatch) => {
  getCarts()
    .then((result) => {
      dispatch(actions.successGetCarts(result.data));
    })
    .catch((error) => {
      toast("something went wrong!", { type: "error" });
    });
};

// export const getLogin = () => {
//   return function (dispatch) {
//     Api.Login()
//       .then((result) => {
//         dispatch(actions.successLogin(result.data));
//       })
//       .catch((error) => {
//         dispatch(actions.failureLogin(error));
//       });
//   };
// };

export const getAllProducts = () => {
  return function (dispatch) {
    getProducts()
      .then((result) => {
        dispatch(actions.successGetProducts(result.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const getAllOrders = () => {
  return function (dispatch) {
    getOrders()
      .then((result) => {
        dispatch(actions.getOrder(result.data));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const getUser = (token) => {
  return function (dispatch) {
    getUserApi(token)
      .then((result) => {
        if (result && result.data)
          dispatch(actions.successGetUser(result.data));
        else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
