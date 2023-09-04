DELIMITER $$
DROP PROCEDURE IF EXISTS getPharmacy;
CREATE PROCEDURE getPharmacy()
BEGIN
    SELECT * FROM pharma.pharmacy;
END $$
DELIMITER ;


DELIMITER $$
DROP PROCEDURE IF EXISTS getSaleData;
CREATE PROCEDURE getSaleData(
    IN pharmacy INT
)
BEGIN
    SELECT *
    FROM sale
             JOIN pharma.product on sale.product_id = product.product_id
    WHERE product.pharmacy_id = pharmacy;
END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS getUserData;
CREATE PROCEDURE getUserData(
    IN pharmacy INT
)
BEGIN
    SELECT *
    FROM user
             JOIN pharma.pharmacy on user.pharmacy_id = pharmacy.pharmacy_id
    WHERE pharma.pharmacy.pharmacy_id = pharmacy;
END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS getLowInventoryData;
CREATE PROCEDURE getLowInventoryData(IN pharmacy INT)
BEGIN
    SELECT *
    FROM product
             JOIN pharma.pharmacy on product.pharmacy_id = pharmacy.pharmacy_id
             JOIN pharma.supplier on product.supplier_id = supplier.supplier_id
    WHERE quantity < 10
      AND product.pharmacy_id = pharmacy;
END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS getPurchaseOrderData;
CREATE PROCEDURE getPurchaseOrderData(
    IN pharmacy INT
)
BEGIN
    SELECT *
    FROM purchaseOrder
             JOIN product p ON purchaseOrder.product_id = p.product_id
             JOIN pharmacy ph ON p.pharmacy_id = ph.pharmacy_id
             JOIN pharma.supplier on p.supplier_id = supplier.supplier_id
    WHERE ph.pharmacy_id = pharmacy;
END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS getSupplierData;
CREATE PROCEDURE getSupplierData(
    IN pharmacy INT
)
BEGIN
    SELECT *
    FROM supplier
             JOIN pharma.product on product.supplier_id = supplier.supplier_id
    WHERE product.pharmacy_id = pharmacy;
END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS getProductData;
CREATE PROCEDURE getProductData(
    IN pharmacy INT
)
BEGIN
    SELECT *
    FROM product
             JOIN pharma.pharmacy on product.pharmacy_id = pharmacy.pharmacy_id
             JOIN pharma.supplier on product.supplier_id = supplier.supplier_id
    WHERE product.pharmacy_id = pharmacy;
END $$
DELIMITER ;


DELIMITER $$
DROP PROCEDURE IF EXISTS getExpiringProductData;
CREATE PROCEDURE getExpiringProductData(
    IN pharmacy INT
)
BEGIN
    SELECT *
    FROM product
             JOIN pharma.pharmacy on product.pharmacy_id = pharmacy.pharmacy_id
             JOIN pharma.supplier on product.supplier_id = supplier.supplier_id
    WHERE product.expiry_date < DATE_ADD(CURDATE(), INTERVAL 3 MONTH)
      AND product.pharmacy_id = pharmacy;
END $$
DELIMITER ;


DELIMITER $$
DROP PROCEDURE IF EXISTS getAddSuppliers;
CREATE PROCEDURE getAddSuppliers(
    IN pharmacy INT
)
BEGIN
    SELECT *
    FROM supplier
    WHERE supplier_id NOT IN (SELECT supplier_id
                              FROM product)
    UNION
    SELECT s.*
    FROM supplier s
             JOIN product p on p.supplier_id = s.supplier_id
    WHERE p.pharmacy_id = pharmacy;
END $$
DELIMITER ;


DELIMITER $$
DROP PROCEDURE IF EXISTS createTable;
CREATE PROCEDURE createTable(IN table_name VARCHAR(255))
BEGIN

    SET @sql = CONCAT('CREATE TABLE ', table_name, ' (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255)
);');
    PREPARE statement FROM @sql;
    EXECUTE statement;
    DEALLOCATE PREPARE statement;
END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS sign_up_user;
CREATE PROCEDURE sign_up_user(IN email VARCHAR(255),
                              IN pass VARCHAR(255), IN id INT)
BEGIN
    INSERT INTO user (username, password, pharmacy_id)
    VALUES (email, pass, id);
END $$
DELIMITER ;


DELIMITER $$
DROP PROCEDURE IF EXISTS resetPassword;
CREATE PROCEDURE resetPassword(IN newPassword VARCHAR(255),IN userID INT)
    BEGIN
        UPDATE user SET password = newPassword WHERE user_id = userID;
    END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS deleteData;
CREATE PROCEDURE deleteData(IN table_name VARCHAR(255),IN dataId INT)
    BEGIN
    SET @sql = CONCAT('DELETE FROM ', table_name, ' WHERE ', table_name, '_id = ', dataId);
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
    END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS updateData;
CREATE PROCEDURE updateData(IN tableName VARCHAR(255),IN columnName VARCHAR(255),IN data VARCHAR(255),IN dataId INT)
    BEGIN
    SET @sql = CONCAT('UPDATE ', tableName,' SET ',columnName,' = ',data, ' WHERE ', tableName, '_id = ', dataId);
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
    END $$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS addData $$
CREATE PROCEDURE addData(
    IN tableName VARCHAR(255),
    IN jsonData JSON
)
BEGIN
    DECLARE fieldName VARCHAR(255);
    DECLARE fieldValue VARCHAR(255);
    DECLARE done INT DEFAULT 0;
    DECLARE cur CURSOR FOR SELECT JSON_UNQUOTE(JSON_KEYS(jsonData)) AS field;

    -- Create a temporary table to hold the data
    CREATE TEMPORARY TABLE temp_data (field_name VARCHAR(255), field_value VARCHAR(255));

    -- Open the cursor and loop through the JSON keys
    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO fieldName;
        IF done THEN
            LEAVE read_loop;
        END IF;
        SET fieldValue = JSON_UNQUOTE(JSON_EXTRACT(jsonData, CONCAT('$.', fieldName)));
        INSERT INTO temp_data (field_name, field_value) VALUES (fieldName, fieldValue);
    END LOOP;
    CLOSE cur;

    -- Construct the SQL query and execute
    SET @sql = CONCAT('INSERT INTO ', tableName, ' (', (SELECT GROUP_CONCAT(field_name) FROM temp_data), ') VALUES (', (SELECT REPEAT('?', COUNT(*)) FROM temp_data), ')');
    SET @values = (SELECT GROUP_CONCAT(field_value) FROM temp_data);
    PREPARE stmt FROM @sql;
    EXECUTE stmt USING @values;
    DEALLOCATE PREPARE stmt;

    -- Drop the temporary table
    DROP TEMPORARY TABLE IF EXISTS temp_data;

END $$
DELIMITER ;


SELECT * FROM product;