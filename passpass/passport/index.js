const local = require('./local-strategy');
const { findUser } = require('../models/chat');

const serialize = (user, done) => {
  done(null, user.id);
};

const deserialize = async (id, done) => {
  try {
    const { success, user } = await findUser('id', id);
    if (success) done(null, user);
    else done(null, false, '사용자 정보가 없습니다.');
  } catch (err) {
    done(err);
  }
};

module.exports = (passport) => {
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);
  local(passport);
};
