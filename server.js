// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Roteamento para as páginas do Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Iniciar o servidor
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Servidor em http://localhost:3000');
  });
});