const { registerUser } = require('../services/authService');

const register = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    const user = await registerUser(username, password, role);
    res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch (err) {
    next(err);
  }
};

module.exports = { register };