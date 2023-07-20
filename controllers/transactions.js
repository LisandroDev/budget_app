const router = require("express").Router();
const models = require("../models/transaction");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const userId = req.userId;
  if(!userId){
    res.status(401).send('Unauthorized')
  }
  let limit;
  if (req.query.limit) {
    limit = req.query.limit;
  }

  const transactions = await models.Transaction.findAll({ limit, where: {userId: userId}});
  res.json(transactions);
});

router.post("/", async (req, res) => {
  const userId = req.userId;
  if(!userId){
    res.status(401).send('Unauthorized')
  }
  const newTransaction = await models.Transaction.create({ ...req.body, userId: userId  });
  res.json(newTransaction);
});

router.get("/balance", async (req, res) => {
  const userId = req.userId;
  if(!userId){
    res.status(401).send('Unauthorized')
  }
  const income = await models.Transaction.sum("amount", {
    where: { type: { [Op.eq]: "income" }, userId: userId },
  });
  const expense = await models.Transaction.sum("amount", {
    where: { type: { [Op.eq]: "expense" }, userId: userId },
  });
  let response = { balance: income - expense };
  res.json(response);
});

router.put("/:id", async (req, res) => {
  const userId = req.userId;
  if(!userId){
    res.status(401).send('Unauthorized')
  }
  const transaction = await models.Transaction.findByPk(req.params.id);

  if (transaction) {
    if(transaction.userId !== userId){
      res.status(401).send('Unauthorized')
    }
    transaction.amount = req.body.amount || transaction.amount;
    transaction.date = req.body.date || transaction.date;
    transaction.concept = req.body.concept || transaction.concept;
    await transaction.save();
    res.json(transaction);
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", async (req, res) => {
  const userId = req.userId;
  if(!userId){
    res.status(401).send('Unauthorized')
  }
  const transaction = await models.Transaction.findByPk(req.params.id);
  if (transaction) {
    if(transaction.userId !== userId){
      res.status(401).send('Unauthorized')
    }
    await transaction.destroy();
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

module.exports = router;
