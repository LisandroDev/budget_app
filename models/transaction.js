const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../util/db");

class Transaction extends Model {}

Transaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM("income", "expense"),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    concept: {
      type: DataTypes.STRING,
      defaultValue: "Not Specified",
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  },
  { sequelize, underscored: true, timestamps: false, modelName: "transaction" }
);

module.exports = Transaction;
