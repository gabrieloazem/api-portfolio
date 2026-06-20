const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

app.get('/endpoint1', (req, res) => {
  res.json({ message: "Endpoint 1" });
});

app.get('/endpoint2', (req, res) => {
  res.json({ message: "Endpoint 2" });
});

const port = process.env.PORT || 3000;
app.listen(port); 