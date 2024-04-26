const express = require('express');
const multer = require('multer');
const router = express.Router();
const multerConfig = require('../multer-config');
const addFormationController = require('../Controllers/addFormationController');

router.post('/register', multerConfig, addFormationController.addFormation);

module.exports = router;
