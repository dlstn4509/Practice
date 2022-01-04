const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');
const { Lefts } = require('../../models');

router.post('/', async (req, res, next) => {
  req.body.user_id = 1;
  const rs = await Lefts.create(req.body);
  res.json(req.body);
});

module.exports = { name: '/form', router };
