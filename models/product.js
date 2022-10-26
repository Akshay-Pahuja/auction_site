'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    image:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    additional_docs:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    starting_price:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    start_time:  {
      type:DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type:DataTypes.DATE,
      allowNull: false,
    },
    category:  {
      type:DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    current_bid:  {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    final_amount: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};