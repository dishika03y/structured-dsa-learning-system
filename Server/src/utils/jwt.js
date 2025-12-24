require("dotenv").config();
const jwt = require("jsonwebtoken");

const signToken = (payload, options) => {
  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  signToken,
  verifyToken,
};
