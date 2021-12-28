const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const upload = require('../../middlewares/multer-mw');
const sharpInit = require('../../middlewares/sharp-mw');
const { Lefts, LeftsFile } = require('../../models');

router.get('/', (req, res) => {
  req.app.locals.css = 'main';
  req.app.locals.js = 'form';
  res.render('chat/form');
});

router.post(
  '/',
  upload.fields([{ name: 'file' }, { name: 'file2' }]),
  sharpInit(500, 500),
  async (req, res, next) => {
    try {
      let arr = [];
      let { file, file2 } = req.files;
      await Lefts.create(req.body);
      let { id } = await Lefts.findOne({ order: [['id', 'DESC']] });
      arr.push(file[0], file2[0]);
      for (let i = 0; i < arr.length; i++) {
        arr[i].thumbfilename = 'thumb-' + arr[i].filename;
        arr[i].lefts_id = id;
      }
      await LeftsFile.bulkCreate(arr);
      // res.json(arr);
      res.redirect('/chat/list/1');
    } catch (err) {
      next(err);
    }
  }
);

module.exports = { name: '/form', router };
