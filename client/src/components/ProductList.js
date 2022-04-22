import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import Model from "./ProductModel";
import { addToCart, getAllProducts } from "../actions";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [desc, setDesc] = useState(null);

  const handleCart = (val) => {
    addToCart(val)
      .then((res) => {
        if (res && res.data) {
          toast(res.data, { type: "success" });
          setOpen(false);
          dispatch(getAllProducts());
        } else {
          toast("something went wrong!", { type: "error" });
          setOpen(false);
        }
      })
      .catch((err) => {
        toast("something went wrong!", { type: "error" });
      })
      .catch((err) => {
        console.log(err);
        setOpen(false);
      });
  };

  // const handleDescription = (index) => {
  //   if (index === desc) {
  //     setDesc(null);
  //   } else {
  //     setDesc(index);
  //   }
  // };

  const handleModal = () => setOpen(!open);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
    setOpen(!open);
  };

  return (
    <div className="container databg-light product-table cart-sec my-2">
      <div
        className="row mx-0 align-items-stretch"
        style={{ placeContent: "center" }}
      >
        <div className="col-md-11 ms-auto">
          <div className="row mx-0">
            {products?.map((product, index) => {
              return (
                <div key={index} className="col-md-6 col-sm-12 col-12 my-3">
                  <div
                    className="card p-md-3 p-sm-2 p-2 bg-light h-100 d-flex flex-row shadow border-warning"
                    onClick={() => handleProductSelection(product)}
                  >
                    <img
                      className="card-img-top w-50"
                      src={product.image}
                      alt="Card"
                    />
                    <div className="card-body text-start">
                      <h4 className="card-title"> {product.productName} </h4>
                      <p className="card-text mb-2">
                        <strong>${product.price}</strong>
                      </p>
                      <p className="mb-0"> stock {product.stock}</p>
                      <p
                        className="text-primary"
                        // onClick={() => handleDescription(index)}
                      >
                        {/*{index === desc ? "Show Less" : "About Product"}*/}
                      </p>
                      <div className="">
                        <button
                          className="btn btn-warning mt-2  text-white shadow"
                          style={{ textSize: "20px" }}
                          onClick={() => handleCart(product)}
                          disabled={product.stock < 1}
                        >
                          <FaCartPlus />
                          <span className="ms-2 ">Add To Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>{" "}
      </div>
      {open && (
        <Model
          handleModal={handleModal}
          open={open}
          handleCart={handleCart}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
};
export default ProductList;
