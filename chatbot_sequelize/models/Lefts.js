module.exports = (sequelize, DataType) => {
  const Lefts = sequelize.define(
    'Lefts',
    {
      id: {
        type: DataType.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      content: {
        type: DataType.STRING(100),
        allowNull: false,
      },
      writer: {
        type: DataType.STRING(100),
        allowNull: false,
      },
      type: {
        type: DataType.STRING(100),
        allowNull: false,
        defaultValue: 'lefts',
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      tableName: 'lefts',
      paranoid: true,
    }
  );

  Lefts.associate = (models) => {
    // Lefts (多) : user (1)
    Lefts.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        allowNull: false,
      },
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    // Lefts (1) : LeftsFile (多)
    Lefts.hasMany(models.LeftsFile, {
      foreignKey: {
        name: 'lefts_id',
        allowNull: false,
      },
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Lefts;
};
