// backend/models/Message.js
const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  subject: { type: String },
  message: { type: String },
  status: { type: String, default: 'unread' },
  receivedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Message', MessageSchema);