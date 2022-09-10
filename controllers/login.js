require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const demoUser = {
   username: 'username',
   password: 'pass',
}

async function login (req, res) {
   const { username, password } = req.body;

   if (demoUser.username != username) {
      return res.status(400).json({ succeed: false, error: 'User not found'});
   }

   const isPass = bcrypt.compare(password, demoUser.password);

   if (!isPass) {
      return res.status(400).json({ succeed: false, error: 'Wrong password'});
   }

   // Create access token
   const token = await jwt.sign(
      { username }, 
      process.env.AT_SECRET, 
      { expiresIn: '60s' }
   );

   // Create refresh token


   // Assign refresh token in http-only cookie
   res.cookie('auth', token, { httpOnly: true });

   return res.status(200).json({ succeed: true, result: {
      assess_token: token
   } });
}

module.exports = login
