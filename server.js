const express = require('express');
const app = express();
const port = 3000;

app.get('/taskss', (req, res) => {
    const tasks = [
        {id: 1, title: 'Completar una tarea 1', description: 'Realizar tarea 1 xd', estado: 'false'},
        {id: 2, title: 'Completar una tarea 2', description: "Realizar tarea 2 xdd", estado: 'true'},
        {id: 3, title: 'Completar una tarea 3', description: 'Completar tarea 3 XD', estado: 'true'},
    ];
    res.json(tasks);
});


app.listen(port, () => {
    console.log('Servidor en funcionamiento http://localhost:${port}')
});