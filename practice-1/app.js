const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Connected!');
})
app.get('/', (req, res) => {
  res.send('Here\'s your send request')
})
