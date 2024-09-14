const { test } = require('../controllers/templateController');
const express = require('express');
const router = express.Router();


router.get('/',test);

module.exports = router;