const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Render registration page
router.get('/register', (req, res) => {
  res.render('register'); // Ensure you have a register.ejs view
});

// Handle registration form submission
// Handle registration form submission
router.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      phone,
      password
    });

    await user.save(); // Save user to the database
    res.redirect('/auth/login'); // Redirect after successful registration
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Render login page
router.get('/login', (req, res) => {
  res.render('login'); // Ensure you have a login.ejs view
});

// Handle login form submission
router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/auth/login',
  failureFlash: true // Assuming you have connect-flash set up for flash messages
}));

// Handle logout
router.get('/logout', (req, res) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;
