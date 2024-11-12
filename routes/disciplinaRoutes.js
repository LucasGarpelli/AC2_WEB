const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

router.get('/', disciplinaController.getAllDisciplinas);
router.get('/:id', disciplinaController.getDisciplinaById);
router.post('/', disciplinaController.createDisciplina);
router.patch('/:id', disciplinaController.updateDisciplina);
router.delete('/:id', disciplinaController.deleteDisciplinaAndAlunos);

module.exports = router;
