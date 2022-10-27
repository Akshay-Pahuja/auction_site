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
      this.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'user_id'
      }),
      this.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'product_id'
      })
      this.belongsTo(models.Supplier, {
        as: 'supplier',
        foreignKey: 'suplier_id'
      })
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
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supplier_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
