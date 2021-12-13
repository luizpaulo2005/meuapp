var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia')

// router.get('/', async function(req, res, next) {
//   dados = await Noticia.find();
//   res.render('noticias/index', { noticias:dados });
// });

router.get('/', async function(req, res, next) {
  dados = await Noticia.find();
  res.json(dados);
});

router.get('/visualizar', async function(req, res, next) {
  visualizador = await Noticia.findById(req.query.id)
  res.json(visualizador);
});

router.get('/contador', async function(req, res, next) {
  quantidade = await Noticia.count();
  res.json({quantidade:quantidade});
});

module.exports = router;