'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Supplier.init({
    name:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    Institute_name:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    mobile_no:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    institute_address:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    institute_contact:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};