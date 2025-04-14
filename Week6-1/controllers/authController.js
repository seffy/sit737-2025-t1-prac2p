const User = require('../models/User');
const bcrypt = require('bcrypt');

// Render the login page
exports.showLogin = (req, res) => {
  res.render('login');
};

// Render the registration page
exports.showRegister = (req, res) => {
  res.render('register');
};

// Handle user registration
exports.registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.render('register', { error: 'Passwords do not match' });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.render('register', { error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.render('register', { error: 'Registration error' });
  }
};

// Handle user login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.render('login', { error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('login', { error: 'Invalid email or password' });
    }

    // TODO: Establish user session here for authenticated routes
    res.send('Login successful');
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'Login error' });
  }
};
