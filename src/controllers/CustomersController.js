const Customer = require('../../models').Customer;

module.exports = {
    fetchAllCustomers(result) {
        Customer.findAll({
                attributes: [
                    "*"
                ],
                raw: true,
            })
            .then((customers) => {
                result(null, customers);
            })
            .catch((err) => {
                result(err, null);
            });
    },
    saveCustomer(customer_name, phone_number, result) {
            if (customer_name == null || phone_number== null) {
              result({
                error: "Please enter valid values",
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
                   "*"
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
