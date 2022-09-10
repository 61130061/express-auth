async function logout (req, res) {

   res.clearCookie('auth');
   
   return res.status(200).json({ succeed: true });
}

module.exports = logout;
