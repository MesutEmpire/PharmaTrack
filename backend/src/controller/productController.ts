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
      sql: `CALL  getSaleData(?);`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
    }
  );
};
const getUserData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `CALL getUserData(?);`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);

      res.json(results[0]);
    }
  );
};
const getLowInventoryData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `CALL getLowInventoryData(?);`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
    }
  );
};
const getPurchaseOrderData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `CALL getPurchaseOrderData(?);`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
    }
  );
};
const getProductData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `CALL getProductData(?);`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
    }
  );
};
const getSupplierData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `CALL getSupplierData(?);`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
    }
  );
};
const getExpiringProductData = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `CALL getExpiringProductData(?);`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
    }
  );
};

const getAddSuppliers = (req: Request, res: Response) => {
  console.log(req.params);
  const { pharmacy } = req.params;
  pool.query(
    {
      sql: `CALL getAddSuppliers(?);`,
      values: [pharmacy],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
    }
  );
};

const addData = (req: Request, res: Response) => {
  const { table_name, data } = req.body;
console.log(table_name)
  console.log(data)
  pool.query(
    {
      sql: `CALL addData(?,?)`,
      values: [table_name,JSON.stringify(data)],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) {
        res.status(500).json(error.message);
      } else {
        console.log(error)
        res.json(results[0]);
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
      sql: `CALL deleteData(?,?)`,
      values: [table_name,data_id],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
    }
  );
};
const updateData = (req: Request, res: Response) => {
  const { table_name, data_id, updateField_name, updateField_value } = req.body;
  pool.query(
    {
      sql: `CALL updateData(?,?,?,?) `,
      values: [table_name,updateField_name,updateField_value, data_id],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results[0]);
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
