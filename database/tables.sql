
DROP DATABASE IF EXISTS pharma;
CREATE DATABASE IF NOT EXISTS pharma;
USE pharma;


CREATE TABLE pharmacy(
                         pharmacy_id INT PRIMARY KEY AUTO_INCREMENT,
                         pharmacy_name VARCHAR(255),
                         pharmacy_email VARCHAR(255)
);
ALTER TABLE pharmacy AUTO_INCREMENT=6001;


CREATE TABLE supplier(
                         supplier_id INT PRIMARY KEY AUTO_INCREMENT,
                         supplier_name VARCHAR(255),
                         phone_number BIGINT,
                         email VARCHAR(255)
);
ALTER TABLE supplier AUTO_INCREMENT=1001;

CREATE TABLE product (
                         product_id INT PRIMARY KEY AUTO_INCREMENT,
                         product_name VARCHAR(20),
                         product_description TEXT,
                         cost_price INT,
                         selling_price INT,
                         quantity INT,
                         expiry_date DATE ,
                         restocking_date DATE,
                         supplier_id INT NOT NULL,
                         pharmacy_id INT NOT NULL,
                         FOREIGN KEY (pharmacy_id) REFERENCES pharmacy(pharmacy_id),
                         FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id)
);
ALTER TABLE product AUTO_INCREMENT=2001;

CREATE TABLE purchaseOrder(
                              purchaseOrder_id INT PRIMARY KEY AUTO_INCREMENT,
                              supplier_id INT NOT NULL,
                              order_quantity BIGINT,
                              order_date DATE,
                              expected_date DATE DEFAULT NULL,
                              actualDelivery_date DATE,
                              product_id INT NOT NULL,
                              FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id),
                              FOREIGN KEY (product_id) REFERENCES product(product_id)
);
ALTER TABLE purchaseOrder AUTO_INCREMENT=3001;

CREATE  TABLE sale(
                      sale_id INT PRIMARY KEY AUTO_INCREMENT,
                      product_id INT NOT NULL,
                      sale_date DATE,
                      sale_quantity BIGINT,
                      selling_price INT DEFAULT 0,
                      profit_margin INT DEFAULT 0,
                      FOREIGN KEY (product_id) REFERENCES product(product_id)
);
ALTER TABLE sale AUTO_INCREMENT=4001;

CREATE TABLE user(
                     user_id INT PRIMARY KEY AUTO_INCREMENT,
                     username VARCHAR(255),
                     password VARCHAR(255),
                     pharmacy_id INT NOT NULL,
                     FOREIGN KEY (pharmacy_id) REFERENCES pharmacy(pharmacy_id),
                     permissions VARCHAR(10) DEFAULT 'user'
);
ALTER TABLE user AUTO_INCREMENT=5001;
