const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Will store hashed password [SEC-01]
  role: { type: String, enum: ['user', 'admin'], default: 'user' } // [SEC-02]
});

module.exports = mongoose.model('User', userSchema);