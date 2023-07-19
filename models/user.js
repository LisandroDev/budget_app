const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../util/db");
const Transaction = require("./transaction")
class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }, hashedPassword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { sequelize, underscored: true, timestamps: true, modelName: "user" }
);

User.hasMany(Transaction, {
    foreignKey: 'userId',
    as: 'transaction',
});

module.exports = User;
