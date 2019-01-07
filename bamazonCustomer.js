var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Oldmillrd7!!',
  database: 'bamazonDB'
});

console.log("You are now connected to Bamazon, Welcome.");

connection.connect(function (err) {
  if (err) throw err;
  start();
});

// console.log("------ITEMS FOR SALE-------");
// console.log("1. Cards Against Humanity");
// console.log("2. Echo Dot");
// console.log("3. Instax Mini Film");
// console.log("4. Travel Coffee Mug");
// console.log("5. Sketchpad");
// console.log("6. Floor Lamp");
// console.log("7. Guitar Strap");
// console.log("8. Guitar Tuner");
// console.log("9. Coffee Mug");
// console.log("10. Humidifier");

function start() {
  inquirer.prompt([{
      type: "input",
      name: "us",
      message: "Welcome to Bamazon, What is your name?"
    },
    {
      type: 'input',
      name: 'item_id',
      message: 'Please choose which item you would like to purchase, using the number they are ordered.',
      choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many would you like to buy?',
      filter: Number
    }
  ]).then(function (input) {
    var item = input.item_id;
    var quantity = input.quantity;

    var queryStr = 'SELECT * FROM products WHERE ?';

    connection.query(queryStr, {
      item_id: item
    }, function (err, data) {
      if (err) throw err;

      if (data.length === 0) {
        console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
        inventoryList();

      } else {
        var productData = data[0];

        if (quantity <= productData.stock_quantity) {
          console.log('The product you requested is in stock! Placing order!');


          var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;


          connection.query(updateQueryStr, function (err, data) {
            if (err) throw err;

            console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
            console.log('Thank you for shopping with us!');
            console.log("\n---------------------------------------------------------------------\n");

            // End the database connection
            connection.end();
          })
        } else {
          console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
          console.log('Please modify your order.');
          console.log("\n---------------------------------------------------------------------\n");

          inventoryList();
        }
      }
    })
  })
}
function inventoryList() {
	// console.log('___ENTER inventoryList___');

	// Construct the db query string
	queryStr = 'SELECT * FROM products';

	// Make the db query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the user for item/quantity they would like to purchase
	  	promptUserPurchase();
	})
}

// runBamazon will execute the main application logic
function runBamazon() {
	// console.log('___ENTER runBamazon___');

	// Display the available inventory
	inventoryList();
}

// Run the application logic
runBamazon();