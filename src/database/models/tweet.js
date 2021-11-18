/* eslint-disable no-param-reassign */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tweets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

  }
  Tweets.init({
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likeCounter: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
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
    modelName: 'Tweets',
  });
  Tweets.associate = function(models) {
    Tweets.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
    Tweets.hasMany(models.Coments, {foreignKey: 'tweetId', as: 'coments'})
  };
  return Tweets;
};
