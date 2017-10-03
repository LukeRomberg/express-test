const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Sup codemon');
})

app.get('/', (req, res) => {
  res.send('yasss queen')
})
