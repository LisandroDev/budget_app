const { DATABASE_URL } = require("./config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");
  } catch (error) {
    console.log("Connection attempt failed");
    return process.exit(1);
  }
  return null;
};

module.exports = { connectToDatabase };
