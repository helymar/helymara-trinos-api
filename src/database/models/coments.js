/* eslint-disable no-param-reassign */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Coments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

  }
  Coments.init({
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likeCounter: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tweetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Coments',
  });
  Coments.associate = function(models) {
    Coments.belongsTo(models.User, {foreignKey: 'tweetId', as: 'tweet'})
  };
  return Coments;
};
