//// Dependencias
const express = require('express');
const router = express.Router();
const func = require('../database/functions')
const StrToBol = require('../model/StringtoBol')




//// index
router.get('/', function (req, res, next) {
  res.render('admin/index');
});

//// rotas do admin eu planejava mais pra frente criar um login 
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
          var opt = []
          for (const i in oportClient.opportunities) {
            opt.push({
              key: client.email,
              name: oportClient.opportunities[i].name,
              limit: oportClient.opportunities[i].limit,
              interest: oportClient.opportunities[i].interest,
              term: oportClient.opportunities[i].term,
              isActive: (oportClient.opportunities[i].isActive == true)? 'Sim': 'Nao',
            })
          }
          ////// formatasao visual
          client.isActive = (client.isActive == true)? "Sim": "Nao" 
          client.agreedTerms = (client.agreedTerms == true)? "Sim": "Nao"
          
          ///// renderizar pagina 
          res.render('admin/verClient',
            {
              client: client,
              opt: opt,
              key: opt.key
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
        res.render('admin/confirm', { acao: 'users' })
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
      func.set('opportunities', req.body.KeyEmail, e)

      res.render('admin/confirm', { acao: 'opportunities' })
    }
  )
}
)

///// del Client
router.get('/del/:keydel', function (req, res, next) {
  func.delete('users', req.params.keydel).then(
    res.render('admin/index')
  )
})

///// del opportunities
router.get('/delopt/:keyEmail/:name', function (req, res, next) {

  var key = req.params.keyEmail
  func.getOne('opportunities', key).then(
    (e) => {
      var opt = []
      for (const i in e.opportunities) {
        if (e.opportunities[i].name != req.params.name) {
          opt.push(e.opportunities[i])
        }
      }

      func.set('opportunities', key, { opportunities: opt }).then(
        res.render('admin/index')
      )

    }
  )
}
)

///// edit Client
router.post('/edit', function (req, res, next) {
  var collection = req.body.collection
  if (collection == 'users') {
    //// tranformando valores string para bol

    ///// passei os dados para ser lido e alterados pela funsao
    func.update(collection, req.body.email, {
      name: req.body.name,
      email: req.body.email,
      isActive: StrToBol(req.body.isActive),
      phone: req.body.phone,
      revenue: Number(req.body.revenue),
      agreedTerms: StrToBol(req.body.agreedTerms)
    }).then(
      res.render('admin/index')
    )
  } else if (collection == 'opportunities') {


    func.getOne(collection, req.body.email).then(
      (e) => {
        e.opportunities.map(
          (e) => {
            console.log(e.name)
            if (e.name == req.body.name) {
              e.limit = Number(req.body.limit)
              e.interest = Number(req.body.interest)
              e.term = Number(req.body.term)
              e.isActive = StrToBol(req.body.isActive)
            }
          }
        )
        func.set(req.body.collection, req.body.email, e)
      }

    ).then(
      res.render('admin/index')
    )
  }


})



module.exports = router;
