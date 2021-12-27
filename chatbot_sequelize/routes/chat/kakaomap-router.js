const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');

router.get('/', (req, res, next) => {
  req.app.locals.css = 'main';
  req.app.locals.js = 'kakaomap';
  res.render('chat/kakaomap');
});

router.post('/', (req, res, next) => {
  res.json(req.body);
});

module.exports = { name: '/kakaomap', router };

// 7CDFB3A4-E9BF-3219-8431-33A57D5A1BF0
