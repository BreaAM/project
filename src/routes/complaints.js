const express = require("express");
const router = express.Router();

const {
  CustomersController
} = require("../controllers");

//  @route  GET income type with its sources

router.get("/all", (req, res) => {
  IncomesController.getAllCustomers((err, customers) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(customers);
    }
  });
});

router.post("/", (req, res) => {
  IncomesController.saveCustomer(req.body, (err, customers) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(customers);
    }
  });
});

router.get("/single", (req, res) => {
  const phone_number = req.query.phone_number;

  CustomersController.getIncome(phone_number,  (err, income) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(income);
      }
    }
  );
});

module.exports = router;
