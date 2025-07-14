const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const region = process.env.REGION || 'desconocida';

app.get('/', (req, res) => {
    res.send(`Hola desde la region: ${region}`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
