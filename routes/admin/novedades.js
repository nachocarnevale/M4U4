var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre
  });
});

module.exports = router;