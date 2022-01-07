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
      originalname: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      filename: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      thumbfilename: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      mimetype: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      fieldname: {
        type: DataType.ENUM,
        allowNull: false,
        values: ['file1', 'file2'],
        defaultValue: 'file1',
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
