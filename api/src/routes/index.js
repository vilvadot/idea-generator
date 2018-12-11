const express = require('express')
const router = express.Router();

const tattooController = require('../controllers/tattooController')
const mainController = require('../controllers/mainController')

router.get('/', tattooController.renderTattoo);
router.get('/api/tattoo', tattooController.generateTattoo);

module.exports = router;