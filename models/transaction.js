"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        }
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        }
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supplier_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Suppliers",
          key: "id",
        }
      }
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
