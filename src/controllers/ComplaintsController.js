const Customer = require('../../models').Customer;
const Transaction = require('../../models').Transaction;
const Complaint = require('../../models').Complaint;

module.exports = {
  fetchAllCustomers(result) {
      Complaint.findAll({
              attributes: [
                  "*"
              ],
              raw: true,
          })
          .then((complaints) => {
              result(null, complaints);
          })
          .catch((err) => {
              result(err, null);
          });
  },
  saveComplaint(phone_number, nature, amount, transaction_code, result) {
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
        let customer_id = customers[0].id;
        Transaction.findAll({
            attributes: [
                "*"
            ],
            where: {
              transaction_code: transaction_code
            },
            raw: true,
        })
        .then((transactions) => {
          let reason = "";
            if (transactions.length==0){
              reason = "Transaction did not reach us. Please forward your original message and check with payment provider.";
            }
            else if (transactions[0].transaction_code){
              reason = "Please confirm your "+nature+" is settled"
            }
            else {
              reason = "System fault. Kindly check in a few minutes"
            }
            Complaint.create({
              customer_id: customer_id,
              recommendation: reason,
              created_at: new Date(),
              updated_at: new Date(),
            })
            .then(() => {
              result(null, {
                message: "Complaint added succesfully",
              });
            })
            .catch((err) => {
              result(err, null);
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

}
