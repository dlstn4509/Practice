const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');

router.get('/', (req, res, next) => {
  res.send('naver');
});

module.exports = { name: '/navermap', router };
