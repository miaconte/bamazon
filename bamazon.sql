CREATE DATABASE bamazonDB; 
USE bamazonDB;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL, 
    product_name VARCHAR (200) NOT NULL,
    department_name VARCHAR (200) NOT NULL,
    price DECIMAL (4,2) NOT NULL,
    stock_quantity	VARCHAR (100) NOT NULL,
    stock INT (50) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Cards Against Humanity", "Games", 25.00, "In-Stock", 50);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Echo Dot", "Entertainment", 29.99, "In-Stock", 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Instax Mini Film", "Photo & Video", 20.00, "In-Stock", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Travel Coffee Mug", "Home & Kitchen", 15.00, "In-Stock on January 24th, 2019", 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Sketchpad", "Office Supplies", 10.00, "In-Stock", 300);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Floor Lamp", "Home", 32.17, "In-Stock", 400);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Guitar Strap", "Musical Instruments", 10.00, "In-Stock on January 18th, 2019", 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Guitar Tuner", "Musical Instruments", 9.00, "In-Stock", 100);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Coffee Mug", "Home & Kitchen", 7.00, "Back-Ordered until January 12th, 2019", 0);

INSERT INTO products (product_name, department_name, price, stock_quantity, stock)
VALUES ("Humidifier", "Home & Lifestyle", 30.00, "In-Stock", 250);


