const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 100,
  message: 'Too many requests, please try again later.'
});

module.exports = limiter;
