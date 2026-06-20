const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 

const port = process.env.PORT || 3000;

// Endpoint único
app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});