const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products', (req, res) => {
    res.send('<h1>This is the products page></h1>');
  });

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = {app, server};