const express = require("express");
const { connectToDatabase } = require("./util/db");
const { PORT } = require("./util/config");
const cors = require('cors')
const app = express();

// Routers
const transactionsRouter = require("./controllers/transactions");
const authRouter = require('./routes/auth.routes');

app.use(express.json());
app.use(cors())
app.use("/api/transactions", transactionsRouter);

app.use("/api/auth", authRouter);


if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}



const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
