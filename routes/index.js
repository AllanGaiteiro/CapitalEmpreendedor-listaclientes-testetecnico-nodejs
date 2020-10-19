const express = require('express');
const router = express.Router();
const func = require('../database/functions')

router.get('/', function(req, res, next) {
  res.send({ message: "OK" });
});
router.get('/lista', function(req, res, next) {
  res.render('public/lista', {users: func.getAll('users')}, console.log(func.getAll('users')));
});

router.get('/ver', function(req, res, next) {
  res.render('public/ver-client');
});
module.exports = router;
