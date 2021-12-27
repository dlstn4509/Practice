const { pool } = require('../../modules/mysql-init');

const createLeftChat = async (body) => {
  try {
    const { leftsContent, leftsWriter } = body;
    let sql = `INSERT INTO lefts SET content=?, writer=?`;
    const [rs] = await pool.execute(sql, [leftsContent, leftsWriter]);
    return { success: true, rs };
  } catch (err) {
    throw new Error(err);
  }
};
const createRightChat = async (body) => {
  try {
    const { rightsContent, rightsWriter } = body;
    let sql = `INSERT INTO rights SET content=?, writer=?`;
    const [rs] = await pool.execute(sql, [rightsContent, rightsWriter]);
    return { success: true, rs };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { createLeftChat, createRightChat };
