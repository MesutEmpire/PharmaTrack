import { Request, Response } from "express";
import { QueryError, RowDataPacket } from "mysql2";
import ErrnoException = NodeJS.ErrnoException;
const pool = require("../middleware/databaseConnection");
const {createUserToken,createAdminToken,maxAge} = require('../middleware/jwtAuth')
const {encryptPass,checkPassword}=require('../middleware/encryptPassword')

const login = async (req: Request, res: Response) => {
  const { email:username, password } = req.body;
  const newPassword = await  encryptPass(password)

  pool.query(
    {
      sql: `SELECT * FROM user WHERE username = ?`,
      values: [username, newPassword],
    },
    (error: QueryError, results: RowDataPacket) => {
      if (error) {
        res.status(500).json(error.message)
      }
      else if (results.length === 0) {
        res.status(401).json("The User does not Exist")
      }
      else
      {
        checkPassword(password,results[0])
            .then((data:any)=>{
              const token = createUserToken(data.user_id)
              res.cookie('userToken',token,{httpOnly:true,maxAge:maxAge*1000}).json(data);
                console.log(`Token generated :   ${token}`)
              console.log(res.headersSent)
              if(data.permissions === "Admin"){
                const adminToken = createAdminToken(data.user_id,data.username)
                res.cookie('adminToken',adminToken,{httpOnly:true,maxAge:maxAge*1000})
              }
              console.log(res.getHeaders())

                if (!res.headersSent) {

                }
            })
            .catch((error:any)=>{
              res.status(401).json(error.message)
            })
      }
    }
  );
};


const sign_up = async (req: Request, res: Response) => {
  const {email: username, password,pharmacy:pharmacy_id} = req.body;

  const newPassword = await encryptPass(password)

  console.log(`Old Password ${password}`)
  console.log(`New hashed Password ${newPassword}`)
  console.log(username)

  pool.getConnection((error: ErrnoException, db: any) => {
    try {
      //INSERT OWNER
      db.promise()
          .query({
            sql: `INSERT INTO user (username, password,pharmacy_id)
                  VALUES (?, ?,?)`,
            values: [username, newPassword,pharmacy_id],
          })
          .then((result: any) => {
            console.log(result)
            console.log('----------------------------------------------')
            console.log(result[0])
            console.log('----------------------------------------------')
            console.log(result[0].insertId)
            console.log('----------------------------------------------')
            db.commit();
            res
                .status(200)
                .json({message: "Registration successful"});
          })
          .catch((error: any) => {
            db.rollback();
            res.status(500).json(error.sqlMessage);
          });
    } catch (error: any) {
      db.rollback();
      res.status(500).json(error.sqlMessage);
    } finally {
      db.release();
    }
  })
}

    // await pool.query(
    //     {
    //         sql: `INSERT INTO user (username, password) VALUES(?,?)`,
    //         values: [username, newPassword],
    //     },
    //     (error: QueryError, results: RowDataPacket) => {
    //         if (error) res.status(500).json(error.message);
    //         else if (results.length === 0) res.status(401).json("Incorrect Username or Password");
    //         else {
    //             const token = createUserToken(username)
    //             console.log(`Token : ${token}`)
    //             res.cookie('userToken',token,{httpOnly:true,maxAge:maxAge*1000})
    //             res.json(results);
    //         }
    //     }
    // );
const logOutUser = (req:Request,res:Response)=>{
  res.cookie('userToken','',{maxAge:1})
  if(req.cookies.adminToken){
    res.cookie('adminToken','',{maxAge:1})
  }
  res.status(200).json("Logged Out")
}

const authUser = (req:Request,res:Response)=>{
  console.log("Successfully Authenticated User")
  res.status(200).json("Success User Authenicated")
}
const authAdmin = (req:Request,res:Response)=>{
  console.log("Successfully Authenticated Admin")
  res.status(200).json("Success Admin Authenicated")
}
const authSuper = (req:Request,res:Response)=>{
  console.log("Successfully Authenticated Super")
  res.status(200).json("Success Super Authenicated")
}

module.exports = {login,sign_up,logOutUser,authUser,authAdmin,authSuper};
