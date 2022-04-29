'use strict';
module.exports = (sequelize, DataTypes) => {
  const Complaint = sequelize.define('Complaint', {
    customer_id: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
    recommendation: DataTypes.TEXT
  }, {});
  Complaint.associate = function(models) {
    // associations can be defined here
  };
  return Complaint;
};