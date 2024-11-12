const Exame = require('../models/Exame');
const Cliente = require('../models/Cliente');

exports.getAllExames = async (req, res) => {
  try {
    const exames = await Exame.find().populate('id_cliente');
    res.json(exames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExameById = async (req, res) => {
  try {
    const exame = await Exame.findById(req.params.id).populate('id_cliente');
    res.json(exame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createExame = async (req, res) => {
  const exame = new Exame(req.body);
  try {
    const novoExame = await exame.save();
    res.status(201).json(novoExame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateExame = async (req, res) => {
  try {
    const exameAtualizado = await Exame.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exameAtualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteExame = async (req, res) => {
  try {
    await Exame.findByIdAndDelete(req.params.id);
    res.json({ message: 'Exame apagado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
