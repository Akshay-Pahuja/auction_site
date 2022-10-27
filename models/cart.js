'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'user_id'
      }),
      this.belongsTo(models.User, {
        as: 'product',
        foreignKey: 'product_id'
      })
    }
  }
  Cart.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      }
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Products",
        key: "id",
      }
    },
  }, 
  {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};