'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Account, {
        as: 'account',
        foreignKey: 'account_id'
      }),
      this.hasMany(models.Bid, {
        as: 'bid',
        foreignKey: 'user_id'
      })
      this.hasMany(models.Transaction, {
        as: 'transaction',
        foreignKey: 'user_id'
      })
      this.hasMany(models.Cart, {
        as: 'cart',
        foreignKey: 'user_id'
      })
    }
  }
  User.init({
    name:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    mobile_no:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    address:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    city:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    state:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    country:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    account_id: {
      type:DataTypes.INTEGER,
      references:{
        model:"Accounts",
        key:"id",
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};