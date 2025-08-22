// // backend/routes/auth.js

// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // We need our User model

// // @route   POST api/auth/register
// // @desc    Register a user
// // @access  Public
// router.post('/register', async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   try {
//     // 1. Check if a user with this email already exists
//     let user = await User.findOne({ email });

//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }

//     // 2. If not, create a new user instance
//     user = new User({
//       name,
//       email,
//       phone,
//       password,
//     });

//     // 3. Hash the password before saving it to the database
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     // 4. Save the user to the database
//     await user.save();

//     res.status(201).json({ msg: 'User registered successfully. Please verify your email.' });

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });


// // @route   POST api/auth/login
// // @desc    Authenticate user & get token
// // @access  Public
// router.post('/login', async (req, res) => {
//   // CORRECTED THIS LINE
//   const { email, password } = req.body;

//   try {
//     // 1. Check if a user with that email exists
//     let user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }

//     // 2. Compare the submitted password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }
    
//     // 3. The user is valid. Now, we create a JSON Web Token (JWT)
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET, // The secret key from your .env file
//       {
//         expiresIn: 3600, // Token expires in 1 hour
//       },
//       (err, token) => {
//         if (err) throw err;
//         // 4. Send the token back to the user
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });


// module.exports = router;


// backend/routes/auth.js

// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // --- TEMPORARY FIX: Hardcode the secret key ---
// const secretKey = 'mysecretkey12345';

// // @route   POST api/auth/register
// // @desc    Register a user
// // @access  Public
// router.post('/register', async (req, res) => {
//   const { name, email, phone, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }
//     user = new User({ name, email, phone, password });
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);
//     await user.save();
//     res.status(201).json({ msg: 'User registered successfully. Please verify your email.' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route   POST api/auth/login
// // @desc    Authenticate user & get token
// // @access  Public
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid Credentials' });
//     }
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(
//       payload,
//       secretKey, // Using our temporary hardcoded key
//       { expiresIn: 3600 },
//       (err, token) => {
//         if (err) throw err;
        
//         // --- THIS IS THE CRITICAL CHANGE ---
//         // We now send back the token AND the user's details.
//         res.json({
//           token,
//           user: {
//             id: user.id,
//             name: user.name,
//             email: user.email,
//           },
//         });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;


// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// --- TEMPORARY FIX: Hardcode the secret key ---
const secretKey = 'mysecretkey12345';

// --- USER ROUTES ---

// @route   POST api/auth/register
// @desc    Register a user
router.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({ name, email, phone, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.status(201).json({ msg: 'User registered successfully. Please verify your email.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth/login
// @desc    Authenticate a regular user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const payload = { user: { id: user.id } };
    jwt.sign(payload, secretKey, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// --- ADMIN ROUTE ---

// @route   POST api/auth/admin/login
// @desc    Authenticate an admin user
router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body; // Admin form uses 'username'

  try {
    // 1. Find a user with the matching email AND the role of 'admin'
    let adminUser = await User.findOne({ email: username, role: 'admin' });

    if (!adminUser) {
      // Use a generic message for security
      return res.status(401).json({ msg: 'Invalid credentials or not an admin' });
    }

    // 2. Compare the password
    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid credentials or not an admin' });
    }

    // 3. Create a token and send it back
    const payload = { user: { id: adminUser.id, role: adminUser.role } };
    jwt.sign(payload, secretKey, { expiresIn: '8h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;