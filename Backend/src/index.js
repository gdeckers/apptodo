const express = require('express');
const server = express();
const TaskRoutes = require('./routes/TaskRoutes');


server.use(express.json());
server.use('/task', TaskRoutes);



server.listen(3000, ()=>{
    console.log('Servidor rodando...')
});