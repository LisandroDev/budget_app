const express = require("express");
const { connectToDatabase } = require("./util/db");
const { PORT } = require("./util/config");
const cors = require('cors');
require('express-async-errors')
const app = express();


const authenticateToken = require('./middlewares/authenticate')
// Routers
const transactionsRouter = require("./controllers/transactions");
const authRouter = require('./routes/auth.routes');

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true}));



app.use("/api/transactions",authenticateToken, transactionsRouter);
app.use("/api/auth", authRouter);
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes

  // Provide a meaningful response to the client
  res.status(500).json({ error: err });
});

app.use(express.static('build'))



const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
