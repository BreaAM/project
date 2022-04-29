const express = require("express");
const router = express.Router();

const {
  TransactionsController
} = require("../controllers");

//  @route GET transactions
router.get("/all", (req, res) => {
  TransactionsController.fetchAllTransactions((err, transactions) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(transactions);
    }
  });
});


router.post("/", (req, res) => {
  phone_number = req.body.phone_number;
  nature = req.body.nature;
  amount = req.body.amount;
  transaction_code = req.body.transaction_code;
  TransactionsController.saveTransaction(phone_number, nature, amount, transaction_code, (err, transactions) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(transactions);
    }
  });
});


module.exports = router;
