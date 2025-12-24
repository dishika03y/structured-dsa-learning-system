const UserSchema = require("../models/user.model");
const bcrypt = require("bcrypt");
const tokenService = require("../utils/generateTokens");
const createUser = async (data) => {
  // Simulate user creation logic
  const { email, name, phone, password, year, branch, goal, preference } = data;
  const existingUser = await UserSchema.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await UserSchema.create({
    email,
    name,
    phone,
    passwordHash: hashedPassword,
    year,
    branch,
    goal,
    preference,
  });
  const userObj = newUser.toObject();
  delete userObj.passwordHash;
  return userObj;
};

const authenticateUser = async (data) => {
  // Simulate user authentication logic
  const { email, password } = data;
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new Error("Authentication failed");
  }
  const ismatch = await bcrypt.compare(password, user.passwordHash);
  if (!ismatch) {
    throw new Error("Authentication failed");
  }

  const safeUser = user.toObject();
  delete safeUser.passwordHash;
  const accessToken = tokenService.generateToken({
    id: user._id,
    email: user.email,
    role: user.role,
  });

  return { user: safeUser, token: accessToken };
};

module.exports = {
  createUser,
  authenticateUser,
};
