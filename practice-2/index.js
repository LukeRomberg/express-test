const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('We connected');
})

app.get('/', (req, res) => {
  res.send('What\'s up mon')
})
