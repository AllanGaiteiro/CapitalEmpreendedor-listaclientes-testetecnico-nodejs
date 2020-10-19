const express = require('express');
const router = express.Router();

/// chamei a function que cuida dos dados
  const func = require('../database/functions')


router.get('/', function(req, res, next) {
  res.send({ message: "OK" });
});

  //// acrecentei rotas basicas
  router.get('/lista', function(req, res, next) {
    res.render('public/lista', {users: func.getAll('users')}, console.log(func.getAll('users')));
  });

  router.get('/ver', function(req, res, next) {
    res.render('public/ver-client');
  });
module.exports = router;
