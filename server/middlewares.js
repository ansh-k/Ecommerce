const jwt = require("jsonwebtoken");
const { keys } = require("./config");

exports.verifyToken = async (req, res, next) => {
  const authorization = req.headers.authorization;
  const jwtSecretKey = keys.JWT_SECRET_KEY;
  const token = authorization.split(" ")[1];
  if (token) {
    try {
      jwt.verify(token, jwtSecretKey);
      next();
    } catch (error) {
      res.json({
        login: false,
        data: error,
      });
    }
  }
};
