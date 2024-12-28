const express = require('express'); // Corrigido para usar const
const app = express(); // Mantendo consistência na declaração

// Middleware para lidar com dados JSON e URL-encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint básico (opcional para teste)
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
