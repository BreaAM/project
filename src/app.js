// Importing packages
const express = require("express");
const bodyParser = require("body-parser");
const upload = require('express-fileupload');

const app = express();

// Ensble CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT,PATCH"
  );
  next();
});
// Link body parser for url reading
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "10gb",
  })
);
app.use(
  bodyParser.json({
    limit: "10gb",
  })
);
app.use(upload())

// Import routes
const {
  customers,
  complaints,
  transactions  
} = require("./routes");

// Initialize routes

app.use("/customers", customers);
app.use("/complaints", complaints);
app.use("/transactions", transactions);


module.exports = app;