'use strict';
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
    }
  }
  Account.init({
    email: {
      type:DataTypes.STRING,
      set(value){
        if(value){
          this.setDataValue("password",bcrypt.hashSync(value,10));
        }
      },
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    reset_password_tokens:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    reset_password_tokens_expired_at:  {
      type:DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};