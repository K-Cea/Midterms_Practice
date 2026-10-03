const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (username, password, role) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds); // [SEC-01]

  const newUser = new User({
    username,
    password: hashedPassword,
    role: role || 'user'
  });

  await newUser.save();
  return newUser;
};

module.exports = { registerUser };