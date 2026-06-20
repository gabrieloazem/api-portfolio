const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Endpoint 1
app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

// Endpoint 2
app.get('/endpoint2', (req, res) => {
  res.json({ message: "Hello endpoint2" });
});

// Exemplo de POST (para enviar dados)
app.post('/enviar-dados', (req, res) => {
  const dados = req.body;
  res.json({ status: "sucesso", recebido: dados });
});

const port = process.env.PORT || 3000;
app.listen(port);