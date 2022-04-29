const Customer = require('../../models').Customer;

module.exports = {
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
    saveCustomer(customer_name, phone_number, result) {
            if (customer_name !== null ) {
              result({
                error: "You have already entered this customer",
              });
            } else {
              Customer.create({
                customer_name: customer_name,
                phone_number: phone_number,
                system: "Safaricom",
                created_at: new Date(),
                updated_at: new Date(),
              })
                .then(() => {
                  result(null, {
                    message: "Customer added succesfully",
                  });
                })
                .catch((err) => {
                  result(err, null);
                });
            }
      },
      getCustomer(phone_number,result) {
        Customer.findAll({
                attributes: [
                   customer_name,
                   phone_number,
                   system
                ],
                raw: true,
                where: {
                    phone_number: phone_number
                }
            })
            .then((customers) => {
                result(null, customers);
            })
            .catch((err) => {
                result(err, null);
            });
    },
}
