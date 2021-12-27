const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');
const { Lefts } = require('../../models');
const moment = require('moment');

router.get('/', async (req, res, next) => {
  const lists = await Lefts.findAll();
  for (let i = 0; i < lists.length; i++) {
    lists[i].dataValues.createdAt = moment(
      lists[i].dataValues.createdAt
    ).format('YYYY-MM-DD');
  }
  res.json(lists);
});

module.exports = { name: '/list', router };
