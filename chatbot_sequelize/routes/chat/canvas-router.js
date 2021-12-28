const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');

router.get('/', (req, res, next) => {
  req.app.locals.css = 'main';
  req.app.locals.js = 'canvas';
  // res.send('asd');
  res.render('chat/canvas');
});

module.exports = { name: '/canvas', router };
