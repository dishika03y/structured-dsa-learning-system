const getProfile = (req, res) => {
  try {
    const user = req.user;
    res
      .status(200)
      .json({ success: true, message: "User profile fetched", data: user });
  } catch (err) {
    console.error("Get profile error", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch profile" });
  }
};

module.exports = {
  getProfile,
};
