Basic Backend Setup
------------------
1. clone the project
2. npm install: to install nodemodules packages
3. npm run server: to run the project
4. Add config.json file

Setup database and migrations
------------------------------
npm sequelize db:create
npm sequelize db:migrate


Notes
-------------------
1. Add customers - http://locahost:5001/customers/
{
	"name": "Peter Makaya",
	"phone_number": "0723009442"
}

2. View Customers -  http://locahost:5001/customers/all

3. POST Transactions -  http://locahost:5001/transactions/
{
	"name": "Gakinya Makau",
	"phone_number": "0723839123"
    "nature": 1, #deposit,
    "amount": 200,
    "transaction_code": "COP99832"
}

4. POST Complaint -  http://locahost:5001/complaints/
{
	"name": "Gakinya Makau",
	"phone_number": "0734839123",
    "nature": 0, #"WITHDRAWAL",
    "amount": 200,
    "transaction_code": "JAS28332"
}

5. GET complaints reports
[
	{
		"id": 1,
		"customer_id": "1",
		"transaction_id": null,
		"recommendation": "Please confirm your DEPOSIT is settled",
		"createdAt": "2022-04-29T12:48:13.000Z",
		"updatedAt": "2022-04-29T12:48:13.000Z"
	}
]
