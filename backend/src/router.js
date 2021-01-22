const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./Middleware');

const router = express.Router();

// Rota de autenticaçao
router.post('/authenticate', (req, res) => {
  const login = {
    id: 1,
    user: "admin",
    password: 1234
  }

  if (req.body.user == login.user
    && 
    req.body.password == login.password) {
      const token = jwt.sign(login, 'PRIVATEKEY');

      console.log(req.body.user, req.body.password);
      return res.json({ 
        message: 'Login Aprovado',
        Auth: true,
        token: token
       });
    }
    res.status(500).json({ message: 'Login inválido!' });
});

// Private route
router.use(authMiddleware);

const clientes = [
  {
    id: 1,
    name: "Cliente 1",
    endereco: "Avenida Brasil",
    bairro: "Centro",
    cidade: "Sao Paulo",
    uf: "SP",
    telefone: "(18)123456789",
    email: "kaik.oliveiraa76@gmail.com"
  },
  {
    id: 2,
    name: "Cliente 2",
    endereco: "Avenida Brasil",
    bairro: "Centro",
    cidade: "Sao Paulo",
    uf: "SP",
    telefone: "(18)123456789",
    email: "kaik.oliveiraa76@gmail.com"
  },
  {
    id: 3,
    name: "Cliente 3",
    endereco: "Avenida Brasil",
    bairro: "Centro",
    cidade: "Sao Paulo",
    uf: "SP",
    telefone: "(18)123456789",
    email: "kaik.oliveiraa76@gmail.com"
  },
  {
    id: 4,
    name: "Cliente 4",
    endereco: "Avenida Brasil",
    bairro: "Centro",
    cidade: "Sao Paulo",
    uf: "SP",
    telefone: "(18)123456789",
    email: "kaik.oliveiraa76@gmail.com"
  },
]

router.get('/clients', async (req, res) => {
  return res.json(clientes);
});