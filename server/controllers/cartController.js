const util = require("../utils");
const carts = require("../mockData/carts.json");
const products = require("../mockData/products.json");
const orders = require("../mockData/order.json");
const jwt = require("jsonwebtoken");

exports.addToCart = async (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(req.params, jwtSecretKey, { expiresIn: "3h" });
  const { id } = req.params;
  const data = products.filter((item) => item.id == id)[0];
  products.map((item) => {
    if (item.id == id) {
      item.stock = item.stock - 1;
    }
  });
  if (data) {
    const fillCarts = carts.filter((item) => item.product_id == id);
    if (fillCarts.length > 0) {
      // res.status(200);
      // res.send("product already added to cart");
      carts.forEach((item, index) => {
        if (item.product_id == id) {
          item.quantity = item.quantity + 1;
        }
      });
      res.status(200);
      res.cookie("jwtoken", token, {
        expiresIn: "1d",
        httpOnly: true,
      });
      res.send(carts);
    } else {
      try {
        carts.push({
          id: carts.length + 1,
          product_id: parseInt(id),
          user_id: 1,
          quantity: 1,
        });
        const response = await util.setCart(carts);
        res.cookie("jwtoken", token, {
          expiresIn: "1d",
          httpOnly: true,
        });
        res.status(200);
        res.send(response);
      } catch (err) {
        res.cookie("jwtoken", token, {
          expiresIn: "1d",
          httpOnly: true,
        });
        res.status(400);
        res.send(err);
      }
    }
  }
};

exports.getCartList = async (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(req.body, jwtSecretKey, { expiresIn: "3h" });
  let cartlist = [];
  try {
    carts.forEach((item) => {
      const product = products.find(({ id }) => id === item.product_id);
      cartlist.push({
        ...product,
        quantity: item.quantity,
        total_price: product.price * item.quantity,
      });
    });
    res.cookie("jwtoken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    res.status(200);
    res.send(cartlist);
  } catch (err) {
    res.status(400);
    console.log("err", err);
  }
};

exports.updateCart = async (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(req.body, jwtSecretKey, { expiresIn: "3h" });
  const { id } = req.params;
  const { quantity } = req.body;

  products.map((item) => {
    if (item.id == id) {
      item.stock = item.stock - quantity;
    }
  });

  try {
    carts.forEach((item, index) => {
      if (item.product_id == id) {
        carts.splice(index, 1, { ...item, quantity: quantity });
      }
    });
    await util.setCart(carts);
    let cartlist = [];
    try {
      carts.forEach((item) => {
        const product = products.find(({ id }) => id === item.product_id);
        cartlist.push({
          ...product,
          quantity: item.quantity,
          total_price: product.price * item.quantity,
        });
      });
      res.cookie("jwtoken", token, {
        expiresIn: "1d",
        httpOnly: true,
      });
      res.status(200);
      res.send(cartlist);
    } catch (err) {
      res.status(400);
      console.log("err", err);
    }
    res.cookie("jwtoken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    res.status(200);
    res.send(cartlist);
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};

exports.removeCart = async (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(req.body, jwtSecretKey, { expiresIn: "3h" });
  const { id } = req.body;

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
  util.setorderList(orders);

  try {
    if (id) {
      const filterCarts = carts.filter((item) => item.product_id != id);
      res.cookie("jwtoken", token, {
        expiresIn: "1d",
        httpOnly: true,
      });
      const response = await util.removeProduct(filterCarts);
      res.status(200);
      res.send(response);
    } else {
      res.cookie("jwtoken", token, {
        expiresIn: "1d",
        httpOnly: true,
      });
      const response = await util.removeProduct([]);
      res.status(200);
      res.send(response);
    }
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};
