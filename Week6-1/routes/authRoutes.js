const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Display login and registration pages
router.get('/login', authController.showLogin);
router.get('/register', authController.showRegister);

// Process login and registration forms
router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);

// Redirect root to login page
router.get('/', (req, res) => {
  res.redirect('/login');
});

module.exports = router;
