const path = require('path');
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const passport = require('passport');
const { alert } = require('../../modules/util');
const { User } = require('../../models');

router.get('/', (req, res, next) => {
  req.app.locals.css = 'main';
  res.render('chat/login');
});

router.post('/', async (req, res, next) => {
  try {
    const done = (err, user, msg) => {
      if (err) return next(err);
      else if (!user) return res.send(alert(msg));
      else {
        req.login(user, (err) => {
          if (err) return next(err);
          else return res.send(alert('로그인 성공 짱', '/chat/list/1'));
        });
      }
    };
    passport.authenticate('local', done)(req, res, next);
  } catch (err) {
    next(createError(err));
  }
});

// router.post('/', async (req, res, next) => {
//   try {
//     const { userid } = req.body;
//     const [rs] = await User.findAll({ where: { userid } });
//     req.session.userid = rs.userid;
//     res.json(document.cookie);
//   } catch (err) {
//     next(createError(err));
//   }
// });

module.exports = { name: '/login', router };
