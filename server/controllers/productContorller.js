var productList = require("../config");
const jwt = require("jsonwebtoken");
const { keys } = require("../config");

var products = productList.products;

exports.getProducts = async (req, res) => {
  let jwtSecretKey = keys.JWT_SECRET_KEY;
  const token = jwt.sign(req.body, jwtSecretKey, { expiresIn: "3h" });
  res.cookie("jwtoken", token, {
    expiresIn: "1d",
    httpOnly: true,
  });
  res.status(200);
  res.send(products);
};
