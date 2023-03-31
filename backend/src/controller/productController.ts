import { Request, Response } from "express";
// const {ErrnoException}  = require('NodeJS.ErrnoException');
import { QueryError, RowDataPacket } from "mysql2";
const pool = require("../middleware/databaseConnection");

const getData = (req: Request, res: Response) => {
  const table = req.params.data;
  pool.query(
    `SELECT * FROM ${table}`,
    (error: QueryError, results: RowDataPacket) => {
      if (error) res.status(500).json(error.message);
      res.json(results);
    }
  );
};

const addData = (req: Request, res: Response) => {
    const {table_name, data} = req.body;
    const fields = Object.keys(data);
    const values = Object.values(data);
  
    const sql = `INSERT INTO ${table_name} (${fields.join(", ")}) VALUES (${fields.map(() => "?").join(", ")})`;
  
    pool.query(
      {
        sql: sql,
        values: values
      }, 
      (error: QueryError, results: RowDataPacket) => {
        if (error) {
          res.status(500).json(error.message);
        } else {
          res.json(results);
        }
      }
    );
}
  
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
module.exports = { addData, getData, updateData, deleteData };
