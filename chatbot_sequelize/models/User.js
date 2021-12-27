const bcrypt = require('bcrypt');

module.exports = (sequelize, DataType) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataType.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userid: {
        type: DataType.STRING(24),
        allowNull: false,
      },
      userpw: {
        type: DataType.STRING(60),
        allowNull: false,
      },
      username: {
        type: DataType.STRING(255),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      tableName: 'user',
      paranoid: true,
    }
  );

  User.associate = (models) => {
    // user (1) : Lefts (多)
    User.hasMany(models.Lefts, {
      foreignKey: {
        name: 'user_id',
        allowNull: false,
      },
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  User.loginUser = async function (userid, userpw) {
    const { BCRYPT_SALT: salt } = process.env;
    const user = await this.findOne({ where: { userid } });
    if (user && user.userpw) {
      const success = await bcrypt.compare(userpw + salt, user.userpw);
      return success ? { success, user } : null;
    } else return null;
  };

  return User;
};
