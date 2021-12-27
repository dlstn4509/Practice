const LocalStrategy = require('passport-local').Strategy;
const { loginUser } = require('../models/chat');

const cb = async (userid, userpw, done) => {
  try {
    const { success, user } = await loginUser(userid, userpw);
    if (success) done(null, user);
    else done(null, false, '아이디와 패스워드를 확인하세요.');
  } catch (err) {
    done(err);
  }
};

const fields = {
  usernameField: 'userid',
  passwordField: 'userpw',
};

const localStrategy = new LocalStrategy(fields, cb);

module.exports = (passport) => passport.use(localStrategy);
