const util = require("../utils");
const products = require("../mockData/products.json");
const carts = require("../mockData/carts.json");
const orders = require("../mockData/order.json");

exports.getOrders = async (req, res) => {
  carts.forEach((item) => {
    const product = products.find(({ id }) => id === item.product_id);
    if (product) {
      orders.push({
        ...product,
        quantity: item.quantity,
        total_price: product.price * item.quantity,
        date: new Date(),
      });
    }
    return [];
  });
  const response = await util.setorderList(orders);
  res.status(200);
  res.send(response);
};
