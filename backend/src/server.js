const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3333;

const Login = {
  id: "1",
  user: "admin",
  password: "1234"
}

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/login', (req, res) => {
  res.json(Login);
})

app.post('/login', (req, res, next) => {
  if (req.body.user == Login.user
    && 
    req.body.password == Login.password) {
      const id = Login.id;
      const token = jwt.sign({ id }, 'authkaikoliveira', {
        expiresIn: 9999
      });
      console.log(req.body.user, req.body.password);
      return res.json({ 
        message: 'Login Aprovado',
        Auth: true,
        token: token
       });
    }
    res.status(500).json({ message: 'Login inválido!' });
})


app.listen(port, () => {
  console.log(`🚩 Server rodando na porta ${port}!`);
});