const express = require('express');
const app = express();

// Definir a porta do servidor
const port = 3000;

// Middleware para permitir requisições JSON
app.use(express.json());

// Rota GET
app.get('/version', (req, res) => {
  res.send('Versão 1!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

