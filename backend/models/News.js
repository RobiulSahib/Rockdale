// backend/models/News.js
const mongoose = require('mongoose');
const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  status: { type: String, default: 'draft' }
});
module.exports = mongoose.model('News', NewsSchema);