const express = require('express');
const router = express.Router();

// Route for Home Page
router.get('/', (req, res) => {
    res.render('index');
});

// Route for About Page
router.get('/about', (req, res) => {
    res.render('about');
});

// Route for Contact Page
router.get('/contact', (req, res) => {
    res.render('contact');
});

// Route for dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});


module.exports = router;
