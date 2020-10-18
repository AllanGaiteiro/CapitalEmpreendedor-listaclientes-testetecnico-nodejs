const express = require('express');
const router = express.Router();
const func = require('../database/functions')

router.get('/', function(req, res, next) {
  res.send({ message: "OK" });
});

router.get('/:todos', function(req, res, next) {
  res.send(
    console.log(func.getAll('users'))
    );
});


module.exports = router;
