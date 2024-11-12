const mongoose = require('mongoose');

const ExameSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  clinica: { type: String, required: true },
  id_cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }
});

module.exports = mongoose.model('Exame', ExameSchema);
