'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
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
      })
    }
  }
  Admin.init({
    name:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    mobile_no:  {
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
    modelName: 'Admin',
  });
  return Admin;
};