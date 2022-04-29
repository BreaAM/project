'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    customer_id: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    transaction_code: DataTypes.STRING,
    nature: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN,
    date_created: DataTypes.DATE
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};