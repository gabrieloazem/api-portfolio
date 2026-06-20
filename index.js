const express = require('express');
const app = express();
const port = 3000;

// Endpoint único
app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});