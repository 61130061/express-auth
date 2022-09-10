const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(
   bodyParser.urlencoded({
      extended: true,
   })
);

app.get('/', (req, res) => {
   res.json({ info: 'hello world'});
});

app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}`);
});
