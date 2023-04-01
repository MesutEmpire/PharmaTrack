import { Request, Response } from "express";
// const {ErrnoException}  = require('NodeJS.ErrnoException');
import { QueryError, RowDataPacket } from "mysql2";
const pool = require("../middleware/databaseConnection");

// const getData = (req: Request, res: Response) => {
//   const table = req.params.data;
//   pool.query(
//       {
//           sql:`SELECT * FROM ${table}`,
//           values:[]
// },
//     (error: QueryError, results: RowDataPacket) => {
//       if (error) res.status(500).json(error.message);
//       res.json(results);
//     }
//   );
// };
const getSaleData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `
                SELECT * FROM sale JOIN pharma.product on sale.product_id = product.product_id
                WHERE product.pharmacy_id = ? ;`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};
const getUserData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `
                SELECT * FROM user JOIN pharma.pharmacy on user.pharmacy_id = pharmacy.pharmacy_id
                WHERE pharmacy.pharmacy_id = ?;`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);

      res.json(results);
    }
  );
};
const getLowInventoryData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `
                SELECT * FROM product JOIN pharma.pharmacy  on product.pharmacy_id = pharmacy.pharmacy_id
                JOIN pharma.supplier  on product.supplier_id = supplier.supplier_id
                WHERE quantity < 10 AND product.pharmacy_id = ?;`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};
const getPurchaseOrderData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `
                SELECT * FROM purchaseOrder 
                JOIN product p ON purchaseOrder.product_id = p.product_id
                JOIN pharmacy ON p.pharmacy_id = pharmacy.pharmacy_id
                JOIN pharma.supplier  on p.supplier_id = supplier.supplier_id
                WHERE pharmacy.pharmacy_id = ?;`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};
const getProductData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `
                SELECT * FROM product
                JOIN pharma.pharmacy  on product.pharmacy_id = pharmacy.pharmacy_id
                JOIN pharma.supplier  on product.supplier_id = supplier.supplier_id
                WHERE product.pharmacy_id = ?;`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};
const getSupplierData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `
                SELECT * FROM supplier
                JOIN pharma.product on product.supplier_id = supplier.supplier_id
                WHERE product.pharmacy_id = ?;`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};
const getExpiringProductData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `
                SELECT * FROM product
                JOIN pharma.pharmacy  on product.pharmacy_id = pharmacy.pharmacy_id
                JOIN pharma.supplier  on product.supplier_id = supplier.supplier_id
                WHERE product.expiry_date < DATE_ADD(CURDATE(), INTERVAL 3 MONTH) AND product.pharmacy_id = ?;`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};

const getAddSuppliers = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `
                SELECT *
                FROM supplier
                WHERE supplier_id NOT IN (
                    SELECT supplier_id
                    FROM product
                )
                UNION
                SELECT s.*
                FROM supplier s
                JOIN product p on p.supplier_id = s.supplier_id
                WHERE p.pharmacy_id = ?;`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};

const addData = (req: Request, res: Response) => {
  const { table_name, data } = req.body;
  console.log(table_name);
  const fields = Object.keys(data);
  const values = Object.values(data);

  const sql = `INSERT INTO ${table_name} (${fields.join(", ")}) VALUES (${fields
    .map(() => "?")
    .join(", ")})`;

  pool.query(
    {
      sql: sql,
      values: values,
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        res.json(results);
      }
    }
  );
};

const deleteData = (req: Request, res: Response) => {
  console.log("DELETE HERE");
  const { table_name, data_id } = req.body;
  console.log(`${table_name}_id`);
  console.log(data_id);
  pool.query(
    {
      sql: `DELETE FROM ${table_name} WHERE ${table_name}_id = ?`,
      values: [data_id],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};
const updateData = (req: Request, res: Response) => {
  const { table_name, data_id, updateField_name, updateField_value } = req.body;
  pool.query(
    {
      sql: `UPDATE  ${table_name} SET ${updateField_name} = ? WHERE ${table_name}_id = ? `,
      values: [updateField_value, data_id],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};
module.exports = {
  addData,
  getSaleData,
  updateData,
  deleteData,
  getUserData,
  getProductData,
  getPurchaseOrderData,
  getLowInventoryData,
  getSupplierData,
  getExpiringProductData,
  getAddSuppliers,
};
