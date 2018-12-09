const express = require('express')
const router = express.Router();

const tattooController = require('../controllers/tattooController')

router.get('/tattoo', tattooController.generateTattoo);

module.exports = router;