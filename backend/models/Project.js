// backend/models/Project.js
const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'upcoming' }
});
module.exports = mongoose.model('Project', ProjectSchema);