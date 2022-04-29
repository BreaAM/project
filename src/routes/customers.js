const express = require("express");
const router = express.Router();

const {
  CustomersController
} = require("../controllers");

//  @route GET customers
router.get("/all", (req, res) => {
  CustomersController.fetchAllCustomers((err, customers) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(customers);
    }
  });
});

router.post("/", (req, res) => {
    customer_name = req.body.name;
    phone_number = req.body.phone_number;
    CustomersController.saveCustomer(customer_name, phone_number, (err, customers) => {
        if (err) {
        res.status(400).json(err);
        } else {
        res.status(200).json(customers);
        }
    });
});

router.get("/single", (req, res) => {
  phone_number = req.body.phone_number;

  CustomersController.getCustomer(phone_number,  (err, income) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(income);
      }
    }
  );
});

module.exports = router;
