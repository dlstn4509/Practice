const { pool } = require('../../modules/mysql-init');
const bcrypt = require('bcrypt');

const createUser = async (body) => {
  try {
    const { userid, userpw, username } = body;
    let { BCRYPT_SALT: salt, BCRYPT_ROUND: round } = process.env;
    let hashPasswd = await bcrypt.hash(userpw + salt, Number(round));
    let sql = `INSERT INTO user SET userid=?, userpw=?, username=?`;
    const [rs] = await pool.execute(sql, [userid, hashPasswd, username]);
    return rs.affectedRows === 1;
  } catch (err) {
    throw new Error(err);
  }
};

const loginUser = async (userid, userpw) => {
  let sql, compare;
  try {
    sql = ' SELECT * FROM user WHERE userid=?';
    const [r] = await pool.execute(sql, [userid]);
    if (r.length === 1) {
      compare = await bcrypt.compare(userpw + process.env.BCRYPT_SALT, r[0].userpw);
      return compare
        ? { success: true, user: r[0], msg: '로그인 되었습니다.' }
        : { success: false, user: null, msg: '비밀번호가 일치하지 않습니다.' };
    } else return { success: false, user: null, msg: '아이디가 일치하지 않습니다.' };
  } catch (err) {
    throw new Error(err);
  }
};

const findUser = async (key, value) => {
  try {
    let sql = `SELECT * FROM user WHERE ${key}='${value}'`;
    const [rs] = await pool.execute(sql);
    if (rs.length === 1) return { success: true, user: rs[0] };
    else return { success: false, user: null };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { createUser, loginUser, findUser };
