// routes/admin.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const isAdmin = require('../middleware/isAdmin');

// GET all users (admin only)
router.get('/users', isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

module.exports = router;
