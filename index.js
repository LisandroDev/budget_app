const express = require("express");
const { connectToDatabase } = require("./util/db");
const { PORT } = require("./util/config");

const app = express();

app.use(express.json());

const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
