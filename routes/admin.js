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
router.post('/ver', function (req, res, next) {
  //// Chamando dados cliente  usando a key pasada na lista
  func.getOne('users', req.body.key).then(
    (client) => {
      //// Chamando oportunidades do client  usando a key pasada na lista
      func.getOne('opportunities', req.body.key).then(
        (oportClient) => {
          //// renderizando todos pagina com dados do cliente e suas oportunidades
          res.render('admin/verClient',
            {
              client: client,
              opt: oportClient.opportunities,
              key: client.email
            }, 
          );
        }
      )
    }
  )

});

//// adcionar cliente
router.get('/add', function (req, res, next) {

  res.render('admin/adcionar');

});
//// Novo cliente
router.post('/new', function (req, res, next) {

  /// Adicionando os dados do novo cliente ao arquivo data.json
  func.set('users', req.body.email, {
    name: req.body.name,
    email: req.body.email,
    isActive: (req.body.isActive == 'on') ? true : false,
    phone: req.body.phone,
    revenue: Number(req.body.revenue),
    agreedTerms: (req.body.agreedTerms == 'on') ? true : false

  }).then(
    () => {
      //console.log('Cliente Cadastrado com Sucesso')
      func.set('opportunities', req.body.email, { "opportunities": [] }).then(
        res.render('admin/confirm', {acao: 'users'} )
      )
    }
  ).catch(
    (err) => {
      console.log('Erro ao Cadastrar o Cliente: ' + err)
    }
  )
})

//// Novo cliente
router.post('/newOpt', function (req, res, next) {

  /// pegar oportunidades ja cadastradas e acrescentando nova  
  func.getOne('opportunities', req.body.KeyEmail).then( 
    (e) => {
      e.opportunities.push(
        {
          name: req.body.optName,
          limit: Number(req.body.optLimit),
          isActive: (req.body.optIsActive == 'on') ? true : false,
          interest: Number(req.body.optInterest),
          term: Number(req.body.optTerm),
        }
      )
      func.set('opportunities', req.body.KeyEmail,  e )
       
      res.render('admin/confirm', {acao: 'opportunities'} )
    }
  )
}
)

router.post('/del/', function (req, res, next) {
  func.delete('users', req.body.key).then(
    res.render('admin/lista')
  )
})
router.post('/delOpt', function (req, res, next) {
  console.log(req.body.key)
})




module.exports = router;
