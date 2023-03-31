
DROP DATABASE IF EXISTS pharma;
CREATE DATABASE IF NOT EXISTS pharma;
USE pharma;


-- CREATE TABLE pharmacy(
--     pharmacy_id INT PRIMARY KEY AUTO_INCREMENT,
--     pharmacy_name VARCHAR(255),
--     pharmacy_email VARCHAR(255)
-- );
-- ALTER TABLE supplier AUTO_INCREMENT=6001;

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
    FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id)
);
ALTER TABLE product AUTO_INCREMENT=2001;

CREATE TABLE purchaseOrder(
    purchaseOrder_id INT PRIMARY KEY AUTO_INCREMENT,
    supplier_id INT NOT NULL,
    quantity BIGINT,
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
    quantity BIGINT,
    selling_price INT,
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);
ALTER TABLE sale AUTO_INCREMENT=4001;

CREATE TABLE user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    permissions VARCHAR(10) DEFAULT 'user'
);
ALTER TABLE user AUTO_INCREMENT=5001;



CREATE TRIGGER purchaseOrder_supplier_id_trigger
BEFORE INSERT ON purchaseOrder
FOR EACH ROW
BEGIN
    SET NEW.supplier_id = (SELECT supplier_id FROM product WHERE product_id = NEW.product_id);
END;


CREATE TRIGGER deductProductStockOnSale
BEFORE INSERT ON sale
FOR EACH ROW 
BEGIN
SET @previousquantity  = (SELECT quantity FROM product WHERE product_id = NEW.product_id);
IF (@previousquantity < NEW.quantity) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient stock for sale';
ELSE
    UPDATE product SET quantity = @previousquantity - NEW.quantity WHERE product_id = NEW.product_id;
    END IF;
END ;


# DROP TRIGGER IF EXISTS deductProductStockOnSale;

INSERT INTO supplier (supplier_name, phone_number, email)
VALUES 
  ('ABC Pharmaceuticals', 1234567890, 'abcpharmaceuticals@example.com'),
  ('Medix Supplies', 2345678901, 'medixsupplies@example.com'),
  ('Top Notch Pharmaceuticals', 3456789012, 'topnotchpharmaceuticals@example.com'),
  ('PharmaPrime', 4567890123, 'pharmaprime@example.com'),
  ('VitalMed Supplies', 5678901234, 'vitalmedsupplies@example.com'),
  ('MediHealth', 6789012345, 'medihealth@example.com'),
  ('HealthPlus Pharmacy', 7890123456, 'healthpluspharmacy@example.com'),
  ('PharmaCare', 8901234567, 'pharmacare@example.com'),
  ('The Medicine Shoppe', 9012345678, 'themedicineshoppe@example.com'),
  ('United Medical Supplies', 0123456789, 'unitedmedicalsupplies@example.com');


INSERT INTO product (product_name, product_description, cost_price, selling_price, quantity, expiry_date, restocking_date, supplier_id)
VALUES
('Paracetamol', 'Pain reliever', 5, 10, 50, '2023-06-30', '2023-04-30', 1001),
('Ibuprofen', 'Anti-inflammatory', 10, 20, 30, '2024-01-31', '2023-10-31', 1001),
('Amoxicillin', 'Antibiotic', 15, 30, 20, '2023-08-31', '2023-05-31', 1002),
('Simvastatin', 'Cholesterol-lowering medication', 20, 40, 10, '2023-11-30', '2023-08-30', 1003),
('Aspirin', 'Blood thinner', 5, 15, 25, '2023-09-30', '2023-06-30', 1004),
('Vitamin C', 'Immune system booster', 3, 5, 100, '2024-03-31', '2023-12-31',1005),
('Paracetamol', 'Pain reliever', 5, 10, 40, '2023-05-31', '2023-03-31', 1001),
('Ibuprofen', 'Anti-inflammatory', 10, 20, 35, '2024-02-28', '2023-11-28', 1001),
('Amoxicillin', 'Antibiotic', 15, 30, 25, '2023-09-30', '2023-06-30', 1002),
('Simvastatin', 'Cholesterol-lowering medication', 20, 40, 12, '2023-12-31', '2023-09-30', 1003);


INSERT INTO purchaseOrder(quantity, order_date, expected_date, actualDelivery_date, product_id) VALUES
(100, '2022-01-01', '2022-01-15', '2022-01-16', 2001),
(50, '2022-02-05', '2022-02-20', NULL, 2002),
(75, '2022-03-12', '2022-03-27', NULL, 2008),
(200, '2022-04-18', '2022-05-03', NULL, 2001),
(300, '2022-05-25', '2022-06-10', '2022-06-11', 2005),
(100, '2022-06-30', '2022-07-15', '2022-07-16', 2006),
(150, '2022-07-12', '2022-07-27', NULL, 2007),
(80, '2022-08-19', '2022-09-03', NULL, 2002),
(120, '2022-09-24', '2022-10-09', NULL, 2009),
(250, '2022-10-31', '2022-11-15', '2022-11-16', 2001);


INSERT INTO sale (product_id, sale_date, quantity, selling_price) VALUES
(2010, '2022-02-15', 5, 500),
(2002, '2022-02-16', 10, 750),
(2005, '2022-02-18', 2, 100),
(2003, '2022-02-20', 8, 900),
(2005, '2022-02-23', 3, 600),
(2001, '2022-02-24', 7, 800),
(2007, '2022-02-27', 4, 300),
(2004, '2022-02-28', 1, 200),
(2002, '2022-03-01', 6, 400);


INSERT INTO sale (product_id, sale_date, quantity, selling_price) VALUES
(2010, '2022-03-04', 7, 1000);

INSERT INTO user (username, password, permissions) VALUES
('john_doe', 'pass123', 'admin'),
('jane_doe', 'pass456', 'cashier'),
('bob_smith', 'pass789', 'manager'),
('jill_johnson', 'pass012', 'cashier'),
('mark_jackson', 'pass345', 'admin'),
('susan_williams', 'pass678', 'manager'),
('michael_brown', 'pass901', 'cashier'),
('katie_davis', 'pass234', 'manager'),
('kevin_lee', 'pass567', 'admin'),
('amy_jones', 'pass890', 'cashier');



SELECT * FROM supplier;

SELECT * FROM product;

SELECT * FROM purchaseOrder;

SELECT * FROM sale;

SELECT * FROM user;


SHOW DATABASES;

