var mysql    = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Oldmillrd7!!',
    database : 'bamazonDB'
  });

  console.log("connected"); 