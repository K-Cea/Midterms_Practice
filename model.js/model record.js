const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Record', recordSchema);