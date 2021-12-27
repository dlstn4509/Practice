const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  req.logout();
  res.locals.user = null;
  res.redirect('/chat/list/1');
});

module.exports = { name: '/logout', router };
