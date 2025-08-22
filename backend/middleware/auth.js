// backend/middleware/auth.js

const jwt = require('jsonwebtoken');

// --- TEMPORARY FIX: Hardcode the secret key ---
const secretKey = 'mysecretkey12345';

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, secretKey);

    // Add user from payload to the request object
    req.user = decoded.user;
    
    // Check if the user is an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied: Admins only.' });
    }

    next(); // Move on to the next middleware or the route handler
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};