const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');

router.get(['/', '/:list'], (req, res, next) => {
  req.app.locals.css = 'main';
  req.app.locals.js = 'seoulhouse';
  res.render('chat/seoulhouse');
});

module.exports = { name: '/seoulhouse', router };
