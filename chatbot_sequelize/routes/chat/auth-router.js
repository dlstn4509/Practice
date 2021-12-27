const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res, next) => {
  req.app.locals.css = 'main';
  res.render('chat/auth');
});

router.post('/', async (req, res, next) => {
  const { BCRYPT_SALT: salt, BCRYPT_ROUND: round } = process.env;
  req.body.userpw = await bcrypt.hash(req.body.userpw + salt, Number(round));
  const rs = await User.create(req.body);
  res.redirect('/chat/list');
});

module.exports = { name: '/auth', router };
