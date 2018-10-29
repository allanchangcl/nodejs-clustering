const os = require('os');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res, next) => {
  for(var i=0; i<2e6; i++) {}
  res.send('Server says Hi!');
});
