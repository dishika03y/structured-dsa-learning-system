const authorizeAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const user = req.user;
    if (user.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Forbidden: Admins only" });
    }
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
module.exports = authorizeAdmin;
