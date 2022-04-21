const products = require("../mockData/products.json");
const carts = require("../mockData/carts.json");

exports.getProducts = async (req, res) => {
  products.map((item) => {
    const product = carts.find(({ product_id }) => product_id === item.id);
    if (product) {
      if (product.product_id === item.id) {
        item.stock = item.stock - product.quantity;
      }
    }
  });
  res.status(200);
  res.send(products);
};
