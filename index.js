const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

// Função auxiliar para padronizar as respostas
const sendResponse = (res, data, error = null, status = 200) => {
  res.status(status).json({
    success: error === null,
    data: data,
    error: error
  });
};

app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

app.get('/endpoint1', (req, res) => {
  sendResponse(res, 'Endpoint 1');
});

app.get('/endpoint2', (req, res) => {
  sendResponse(res, 'Endpoint 2');
});

app.get('/erro', (req, res) => {
  sendResponse(res, null, 'Algo deu errado!', 400);
});

const port = process.env.PORT || 3000;
app.listen(port); 