const express = require("express");
const app = express();

const middlewares = require("./middlewares");
const cart = require("./controllers/cart");
const product = require("./controllers/product");
const user = require("./controllers/user");
const order = require("./controllers/order");

app.post("/signup", user.signUp);
app.post("/login", user.userLogin);
app.get("/user", user.getUser);

app.get("/products", middlewares.verifyToken, product.getProducts);
app.get("/orders", middlewares.verifyToken, order.getOrders);
app.get("/carts", middlewares.verifyToken, cart.getBagList);
app.post("/cart/:id", middlewares.verifyToken, cart.addToBag);
app.delete("/cart", middlewares.verifyToken, cart.removeBag);
app.patch("/cart/:id", cart.updateBag);

module.exports = app;
