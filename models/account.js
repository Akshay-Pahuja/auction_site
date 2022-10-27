'use strict';
const bcrypt = require("bcrypt");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.User, {
        as: 'user',
        foreignKey: 'account_id'
      })
      this.hasOne(models.Admin, {
        as: 'admin',
        foreignKey: 'account_id'
      })
      this.hasOne(models.Supplier, {
        as: 'supplier',
        foreignKey: 'account_id'
      })
    }
  }
  Account.init({
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        if(value){
          this.setDataValue("password",bcrypt.hashSync(value,10));
        }
      },
    },
    reset_password_tokens: DataTypes.STRING,
    reset_password_tokens_expired_at: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};