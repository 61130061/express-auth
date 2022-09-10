require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookies = require('cookie-parser');

const login = require('./controllers/login');
const logout = require('./controllers/logout');
const getSecret = require('./controllers/getSecret');
const auth = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
   origin: process.env.FRONTEND_URL,
   credentials: true,
}));
app.use(cookies());
app.use(bodyParser.json());
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
);


// API ROUTES
app.get('/', (req, res) => {
   res.json({ info: 'hello world'});
});

app.post('/login', login);
app.post('/logout', logout);

app.get('/secret', auth, getSecret);


app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}`);
});
