const { removeListener } = require("../app");
const jwt = require("./jwt");

const generateToken = (user) => {
  return jwt.signToken(
    { id: user.id, email: user.email, role: user.role },
    { expiresIn: "1h" }
  );
};

module.exports = { generateToken };
