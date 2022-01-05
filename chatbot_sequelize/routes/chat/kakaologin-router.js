const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');
const { kakaoInit } = require('../../modules/kakao-init');
const { logOutKakao } = require('../../modules/kakao-logout-init');

router.get('/', (req, res, next) => {
  req.app.locals.css = 'main';
  req.app.locals.js = 'kakaologin';
  let txt;
  let code;
  if (req.originalUrl.includes('?')) {
    txt = req.originalUrl.split('?')[1];
    code = txt.substring(5, txt.length);
  }
  res.render('chat/kakaologin', { code });
});

router.post('/cb', (req, res, next) => {
  let { input } = req.body;
  kakaoInit(input);
  res.redirect('/chat/kakaologin');
});

router.post('/logout', (req, res, next) => {
  let { input2 } = req.body;
  logOutKakao(input2);
  res.redirect('/chat/kakaologin');
});

module.exports = { name: '/kakaologin', router };
