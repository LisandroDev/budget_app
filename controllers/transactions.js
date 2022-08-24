const router = require("express").Router();
const Transaction = require("../models/transaction");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  let limit;
  if (req.query.limit) {
    limit = req.query.limit;
  }

  const transactions = await Transaction.findAll({ limit });
  res.json(transactions);
});

router.post("/", async (req, res) => {
  const newTransaction = await Transaction.create({ ...req.body });
  res.json(newTransaction);
});

router.get("/balance", async (req, res) => {
  const income = await Transaction.sum("amount", {
    where: { type: { [Op.eq]: "income" } },
  });
  const expense = await Transaction.sum("amount", {
    where: { type: { [Op.eq]: "expense" } },
  });
  let response = { balance: income - expense };
  res.json(response);
});

module.exports = router;
