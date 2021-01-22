const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./router');

const app = express();
const port = 3333;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`🚩 Server rodando na porta ${port}!`);
});