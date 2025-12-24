const authservice = require("../services/auth.service");

const register = async (req, res) => {
  // Registration logic here
  try {
    const result = await authservice.createUser(req.body);
    res
      .status(201)
      .json({ success: true, message: "User registered", data: result });
  } catch (err) {
    console.error("Regiteration error", err);
    res.status(400).json({
      success: false,
      message: "Registration failed",
    });
  }
};

const login = async (req, res) => {
  // Login logic here
  try {
    const result = await authservice.authenticateUser(req.body);
    res
      .cookie("token", result.token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 5,
      })
      .status(200)
      .json({ success: true, message: "Login successful", data: result.user });
  } catch (err) {
    console.error("Login error", err);
    res.status(401).json({ success: false, message: "Login failed" });
  }
};

const logout = async (req, res) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      })
      .status(200)
      .json({ success: true, message: "Logout successful" });
  } catch (err) {
    console.error("Logout error", err);
    res.status(500).json({ success: false, message: "Logout failed" });
  }
};

module.exports = {
  register,
  login,
  logout,
};
