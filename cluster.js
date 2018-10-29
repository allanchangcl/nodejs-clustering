const os = require('os');
const cluster = require('cluster')

if (cluster.isMaster) {
  const n_cpus = os.cpus().length;
  console.log(`Forking ${n_cpus} CPUs`);
  for (let i=0; i<n_cpus; i++) {
    cluster.fork();
  }
} else {
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
}
