// backend/routes/messages.js

const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST api/messages
// @desc    Submit a new contact message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, phone, location, message } = req.body;

    const newMessage = new Message({
      name,
      phone,
      subject: `New inquiry from ${name}`, // You can customize the subject
      message: `Location: ${location || 'Not provided'}. Message: ${message || 'No message.'}`
    });

    await newMessage.save();
    res.status(201).json({ msg: 'Message sent successfully!' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;