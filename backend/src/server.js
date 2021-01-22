const express = require('express');
const cors = require('cors');

const routes = require('./router');

const app = express();
const port = 3333;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`🚩 Server rodando na porta ${port}!`);
});