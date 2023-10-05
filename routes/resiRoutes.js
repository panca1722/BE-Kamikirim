const express = require('express');
const { resiController } = require('../controllers');
const router = express.Router();

router.get('/resi', resiController.getResi);

module.exports = router;