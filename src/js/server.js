const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Rota para a landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});