const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Listening muthafucka');
})

app.get('/', (req, res) => {
  res.send('All your things are in a box to the left')
})
