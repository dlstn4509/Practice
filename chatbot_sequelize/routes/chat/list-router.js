const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');
const { Lefts, User, LeftsFile } = require('../../models');
const createPager = require('../../modules/pager-init');

router.get('/:page', async (req, res, next) => {
  try {
    req.app.locals.css = 'main';
    req.app.locals.js = 'list';

    const totalRecord = await Lefts.count();
    const pager = createPager(req.params.page, totalRecord);
    let offsetCnt = 0;
    if (req.params.page && req.params.page > 1) {
      offsetCnt = (req.params.page - 1) * 5;
    }
    const lists = await Lefts.findAll({
      include: [{ model: User }, { model: LeftsFile }],
      limit: 5,
      offset: offsetCnt,
      order: [['id', 'DESC']],
    });
    // res.json(lists);
    res.render('chat/list', { lists, pager });
  } catch (err) {
    next(createError(err));
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Lefts.destroy({ where: { id: req.params.id } });
    res.redirect('/chat/list');
  } catch (err) {
    next(createError(err));
  }
});

module.exports = { name: '/list', router };
