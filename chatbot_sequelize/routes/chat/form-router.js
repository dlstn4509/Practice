const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const upload = require('../../middlewares/multer-mw');
const sharpInit = require('../../middlewares/sharp-mw');
const { Lefts } = require('../../models');

router.get('/', (req, res) => {
  req.app.locals.css = 'main';
  res.render('chat/form');
});

router.post(
  '/',
  upload.fields([{ name: 'file' }, { name: 'file2' }]),
  sharpInit(500, 500),
  async (req, res, next) => {
    try {
      await Lefts.create(req.body);
      res.redirect('/chat/list/1');
    } catch (err) {
      next(err);
    }
  }
);

module.exports = { name: '/form', router };
