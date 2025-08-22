

const mongoose = require('mongoose');

const ContactInfoSchema = new mongoose.Schema({
  companyName: { type: String, default: 'Rockdale Properties Ltd.' },
  address: { type: String, default: '' },
  phone: { type: String, default: '' },
  email: { type: String, default: '' },
  website: { type: String, default: '' },
  workingHours: { type: String, default: '' },
  description: { type: String, default: '' },
  facebook: { type: String, default: '' },
  twitter: { type: String, default: '' },
  instagram: { type: String, default: '' },
  linkedin: { type: String, default: '' },
});

// This is the most important line. It takes the schema blueprint and creates
// a usable model, which is what gives us the .findOne() and .findOneAndUpdate() functions.
// This is what we then export to be used in other files.
module.exports = mongoose.model('ContactInfo', ContactInfoSchema);