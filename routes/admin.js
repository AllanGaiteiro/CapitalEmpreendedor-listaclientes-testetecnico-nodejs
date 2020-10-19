const express = require('express');
const router = express.Router();
const func = require('../database/functions')

router.get('/', function(req, res, next) {
  res.render('admin/index');
});


router.get('/lista', function(req, res, next) {
  res.render('admin/lista', {users: func.getAll('users')}, console.log(func.getAll('users')));
});

router.get('/ver', function(req, res, next) {
  res.render('admin/ver-client');
});

router.get('/add', function(req, res, next) {

    res.render('admin/adcionar');

});

//console.log(func.getAll('users'))

module.exports = router;
