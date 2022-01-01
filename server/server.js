const express = require('express');
const path = require('path');

const app = express(); 

const PORT = process.env.port || 3000;

const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})


app.listen(PORT, () => {
  console.log('Ole cloth ears is listening on port ', PORT)
})