const express = require("express");
const router = express.Router();

const {
  ComplaintsController
} = require("../controllers");

//  @route GET complaints
router.get("/all", (req, res) => {
  ComplaintsController.fetchAllCustomers((err, complaints) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(complaints);
    }
  });
});

router.post("/", (req, res) => {
  phone_number = req.body.phone_number;
  nature = req.body.nature;
  amount = req.body.amount;
  transaction_code = req.body.transaction_code;
  ComplaintsController.saveComplaint(phone_number, nature, amount, transaction_code, (err, complaints) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(complaints);
    }
  });
});

module.exports = router;
