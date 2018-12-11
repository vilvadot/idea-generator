const express = require('express')
const router = express.Router();

const tattooController = require('../controllers/tattooController')

router.get('/', tattooController.renderTattoo);
router.get('/api/tattoo', tattooController.generateIdea);

module.exports = router;