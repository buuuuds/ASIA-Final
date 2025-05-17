const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = (req, res) => {
  const { username, password } = req.body;

  // Check if both username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const hashed = bcrypt.hashSync(password, 10);

  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashed], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'User registered successfully. Login first to get your token.' });
  });
};


exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    const user = results[0];
    if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
    res.json({ token });
  });
};
