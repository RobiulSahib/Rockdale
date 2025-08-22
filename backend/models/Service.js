// backend/models/Service.js
const mongoose = require('mongoose');
const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'active' }
});
module.exports = mongoose.model('Service', ServiceSchema);