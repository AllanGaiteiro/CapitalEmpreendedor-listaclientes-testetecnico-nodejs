//// Dependencias
  const express = require('express');
  const router = express.Router();
  const func = require('../database/functions')


//// rotas do admin

  //// index
    router.get('/', function (req, res, next) {
      res.render('admin/index');
    });

  //// lista clientes
    router.get('/lista', function (req, res, next) {

      /// Chamando todos os usuarios
      func.getAll('users').then(
        
        //// Confirmando Promessa
        (objUser) => {
          
          var allkeys = Object.keys(objUser)///// Array de chaves
          var listClient = []

          for (var i = 0; i < allkeys.length; i++) {
            listClient.push(objUser[`${allkeys[i]}`])            
          }
          
          
          res.render('admin/lista',
            {
              /// passando lista cliente 
              listClient: listClient
            });
        })
    });

  //// visualizar cliente
    router.get('/ver', function (req, res, next) {
      res.render('admin/ver-client');
    });

  //// adcionar cliente
    router.get('/add', function (req, res, next) {

      res.render('admin/adcionar');

    });

//console.log(func.getAll('users'))

module.exports = router;
