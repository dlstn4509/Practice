const { pool } = require('../../modules/mysql-init');

const listChat = async () => {
  try {
    let sql = `SELECT * FROM lefts UNION SELECT * FROM rights ORDER BY createdAt ASC`;
    const [lists] = await pool.execute(sql);
    return { lists };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { listChat };
