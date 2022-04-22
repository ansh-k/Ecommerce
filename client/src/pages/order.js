import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getAllOrders } from "../actions";

const Order = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state?.data?.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div className="col-md-6 offset-md-3 col-sm-12 col-12 my-3 billing">
      <h4 style={{ marginTop: "100px", marginBottom: "23px" }}> My Orders</h4>
      <div className="product-table">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th scope="col"> No.</th>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col-2">Quantity x Price</th>
              <th scope="col">Total Price</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {orderList &&
              orderList?.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      className="rounded-circle"
                      height="40"
                      width="40"
                      src={item.image}
                      alt="Card"
                    />
                  </td>
                  <td>{item?.productName}</td>
                  <td>
                    {item?.quantity} * {item?.price}
                  </td>
                  <td>{item?.total_price}</td>
                  <td>{item?.date?.slice(0, 10)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Order;
