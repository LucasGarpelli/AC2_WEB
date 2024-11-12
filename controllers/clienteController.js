const Cliente = require('../models/Cliente');
const Exame = require('../models/Exame');

exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    const exames = await Exame.find({ id_cliente: req.params.id });
    res.json({ cliente, exames });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCliente = async (req, res) => {
  const cliente = new Cliente(req.body);
  try {
    const novoCliente = await cliente.save();
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCliente = async (req, res) => {
  try {
    const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(clienteAtualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCliente = async (req, res) => {
  try {
    await Exame.deleteMany({ id_cliente: req.params.id });
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cliente e exames relacionados apagados com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
