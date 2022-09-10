require('dotenv').config();
const jwt = require('jsonwebtoken');

async function auth (req, res, next) {
   const token = req.cookies.auth;

   if (!token) {
      return res.status(401).json({ succeed: false, error: 'Unauthorized user' });
   }

   next();
}

module.exports = auth;
