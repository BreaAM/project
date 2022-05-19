const Transaction = require('../../models').Transaction;
const Customer = require('../../models').Customer;

module.exports = {
    saveTransaction(phone_number, nature, amount, transaction_code, result) {
      Customer.findAll({
          attributes: [
              "*"
          ],
          where: {
            phone_number: phone_number
          },
          raw: true,
      })
      .then((customers) => {
          customer_id = customers[0].id;
          console.log(customer_id)
          Transaction.create({
            customer_id: customer_id,
            nature: nature,
            amount: amount,
            transaction_code: transaction_code,
            created_at: new Date(),
            updated_at: new Date(),
          })
            .then(() => {
              result(null, {
                message: "Transaction added succesfully",
              });
            })
            .catch((err) => {
              result(err, null);
            });
      })
      .catch((err) => {
          result(err, null);
      });    
    },
  
    fetchAllTransactions(result) {
        Transaction.findAll({
                attributes: [
                    "*"
                ],
                raw: true,
            })
            .then((transactions) => {
                result(null, transactions);
            })
            .catch((err) => {
                result(err, null);
            });
    },
}
