const express = require("express");
var dotenv = require("dotenv");
var routes = require("./routes");
const cors = require("cors");
const { keys } = require("./config");

const app = express();
dotenv.config();
const port = keys.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log("server is connected on port ", port);
});
