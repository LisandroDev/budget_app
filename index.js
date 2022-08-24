const express = require("express");
const { connectToDatabase } = require("./util/db");
const { PORT } = require("./util/config");

const app = express();

// Routers
const transactionsRouter = require("./controllers/transactions");

app.use(express.json());
app.use("/api/transactions", transactionsRouter);

const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
