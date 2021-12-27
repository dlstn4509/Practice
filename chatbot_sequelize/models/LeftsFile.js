module.exports = (sequelize, DataType) => {
  const LeftsFile = sequelize.define(
    'LeftsFile',
    {
      id: {
        type: DataType.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      oriName: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      saveName: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      mimeType: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      fileType: {
        type: DataType.ENUM,
        allowNull: false,
        values: ['I', 'F'],
        defaultValue: 'F',
      },
      size: {
        type: DataType.INTEGER(10),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      tableName: 'leftsfile',
      paranoid: true,
    }
  );

  LeftsFile.associate = (models) => {
    // LeftsFile (多) : Lefts (1)
    LeftsFile.belongsTo(models.Lefts, {
      foreignKey: {
        name: 'lefts_id',
        allowNull: false,
      },
      sourceKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return LeftsFile;
};
