const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');

router.get('/', (req, res, next) => {
  req.app.locals.css = 'main';
  req.app.locals.js = 'businessman';
  res.render('chat/businessman');
});

module.exports = { name: '/businessman', router };
