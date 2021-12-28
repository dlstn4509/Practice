const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../../modules/mysql-init');
const sharp = require('sharp');
const { Lefts, User, LeftsFile } = require('../../models');

router.get('/:id', async (req, res, next) => {
  try {
    req.app.locals.css = 'main';
    req.app.locals.js = 'view';
    const [list] = await Lefts.findAll({
      where: { id: req.params.id },
      include: [{ model: User }, { model: LeftsFile }],
    });
    res.render('chat/view', { list, sharp });
    // res.json(list);
  } catch (err) {
    next(createError(err));
  }
});

router.post('/', async (req, res, next) => {
  try {
    await Lefts.update(req.body, { where: { id: req.body.id } });
    res.redirect('/chat/view/' + req.body.id);
    // res.json(req.body);
  } catch (err) {
    next(createError(err));
  }
});

module.exports = { name: '/view', router };
