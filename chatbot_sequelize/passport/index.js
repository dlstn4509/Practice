const local = require('./local-strategy');
const { User } = require('../models');

const serialize = (user, done) => {
  done(null, user.id);
};

const deserialize = async (id, done) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (user) done(null, user);
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
