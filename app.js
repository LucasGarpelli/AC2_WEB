require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.log('Erro ao conectar ao MongoDB:', error));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
const clienteController = require('./controllers/clienteController');
const exameController = require('./controllers/exameController');

app.get('/cliente', clienteController.getAllClientes);
app.get('/cliente/:id', clienteController.getClienteById);
app.post('/cliente', clienteController.createCliente);
app.patch('/cliente/:id', clienteController.updateCliente);
app.delete('/cliente/:id', clienteController.deleteCliente);

app.get('/exame', exameController.getAllExames);
app.get('/exame/:id', exameController.getExameById);
app.post('/exame', exameController.createExame);
app.patch('/exame/:id', exameController.updateExame);
app.delete('/exame/:id', exameController.deleteExame);


