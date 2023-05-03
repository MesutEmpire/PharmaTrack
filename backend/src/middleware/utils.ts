import {QueryError, RowDataPacket} from "mysql2";

const pool = require("../middleware/databaseConnection");

const getUserName = (username:string)=>{
    return new Promise((resolve, reject) => {
        pool.query(
            {
                sql: `SELECT *
                      FROM user
                      WHERE username = ?`,
                values: [username],
            },
            (error: QueryError, results: RowDataPacket) => {
                if (error) {
                    reject({
                        status: 500,
                        message: error.message
                    })
                } else if (results.length === 0) {
                    reject({
                        status: 401,
                        message: "The User does not Exist"
                    })
                } else {
                    resolve(results[0])
                }
            })
    })
}

module.exports = {getUserName}