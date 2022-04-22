import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="container" style={{ marginTop: "0", maxWidth: "100%" }}>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
