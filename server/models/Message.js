// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', messageSchema);
