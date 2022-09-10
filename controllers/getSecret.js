const bcrypt = require('bcrypt');

async function getSecret (req, res) {
   
   return res.status(200).json({ succeed: true, result: 'secret' });
}

module.exports = getSecret;
