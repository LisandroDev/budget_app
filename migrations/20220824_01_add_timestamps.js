const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn("transactions", "created_at", {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    });
    await queryInterface.addColumn("transactions", "updated_at", {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("transactions", "created_at");
    await queryInterface.removeColumn("transactions", "updated_at");
  },
};
