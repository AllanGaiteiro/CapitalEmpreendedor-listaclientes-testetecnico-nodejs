const express = require('express');
const router = express.Router();
const func = require('../database/functions')

router.get('/', function(req, res, next) {
  res.send({ message: "OK" });
});

module.exports = router;
