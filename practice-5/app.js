const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Done, biiiiitch.');
})
app.get('/', (req, res) => {
  res.send('Finished, homie.')
})
