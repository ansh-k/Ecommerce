const products = require("../mockData/products.json");
const jwt = require("jsonwebtoken");

exports.getProducts = async (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(req.body, jwtSecretKey, { expiresIn: "3h" });
  res.cookie("jwtoken", token, {
    expiresIn: "1d",
    httpOnly: true,
  });
  res.status(200);
  res.send(products);
};
