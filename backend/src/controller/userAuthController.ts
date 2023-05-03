import {Request, Response} from "express";
import { QueryError, RowDataPacket } from "mysql2";
import ErrnoException = NodeJS.ErrnoException;
const pool = require("../middleware/databaseConnection");
const {
  createUserToken,
  createAdminToken,
  resetPassToken,
  maxAge,
} = require("../middleware/jwtAuth");
const { encryptPass, checkPassword } = require("../middleware/encryptPassword");
const {getUserName} = require('../middleware/utils')
const {sendResetLink} = require('../middleware/sendMail')

const login = (req: Request, res: Response) => {
  const {email: username, password} = req.body;

  getUserName(username)
      .then((result: any) => {
        checkPassword(password, result)
            .then((data: any) => {
              const token = createUserToken(data.user_id);
              res
                  .cookie("userToken", token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000,
                  })
                  .json(data);
              if (data.permissions === "Admin") {
                const adminToken = createAdminToken(data.user_id, data.username);
                res.cookie("adminToken", adminToken, {
                  httpOnly: true,
                  maxAge: maxAge * 1000,
                });
              }
            })
            .catch((error: any) => {
              res.status(401).json(error.message);
            });
      })
      .catch((error: any) => {
        res.status(error.status).json(error.message);
      });
}

const sign_up = async (req: Request, res: Response) => {
  const { email: username, password, pharmacy: pharmacy_id } = req.body;

  const newPassword = await encryptPass(password);

  pool.getConnection((error: ErrnoException, db: any) => {
    try {
      //INSERT OWNER
      db.promise()
        .query({
          sql: `INSERT INTO user (username, password,pharmacy_id)
                  VALUES (?, ?,?)`,
          values: [username, newPassword, pharmacy_id],
        })
        .then((result: any) => {
          db.commit();
          res.status(200).json({ message: "Registration successful" });
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
  });
};
const logOutUser = (req: Request, res: Response) => {
  res.cookie("userToken", "", { maxAge: 1 });
  if (req.cookies.adminToken) {
    res.cookie("adminToken", "", { maxAge: 1 });
  }
  res.status(200).json("Logged Out");
};

const forgotPassword = (req: Request, res: Response) => {
  const { email: username } = req.body;

    getUserName(username)
        .then((result: any) => {
            const token = resetPassToken(result)
            sendResetLink({
                from: process.env.GMAIL_USERNAME,
                to: result.username,
                subject: `RESET PASSWORD`,
                html: `<p>Click this link to reset your password:</p><a href="http://localhost:5173/reset_password/${result.user_id}/?data=${token}">Reset Password</a>`

            })
                .then((response:any)=> res.status(200).json(response))
                .catch((error: any) => res.status(401).json(error))
        })
        .catch((error: any) => {
            res.status(error.status).json(error.message);
        });

}
const resetPassword = async (req: Request, res: Response) => {
    const {data_id:user_id, password} = req.body;
    const newPassword = await encryptPass(password);
    pool.query(
        {
            sql: `UPDATE user SET password = ? WHERE user_id = ? `,
            values: [newPassword, user_id],
        },
        (error: QueryError, results: RowDataPacket) => {
            if (error) res.status(500).json(error.message);
            res.json(results);
        }
    );
}

const authUser = (req: Request, res: Response) => {
  console.log("Successfully Authenticated User");
  res.status(200).json("Success User Authenicated");
};
const authAdmin = (req: Request, res: Response) => {
  console.log("Successfully Authenticated Admin");
  res.status(200).json("Success Admin Authenicated");
};
const authSuper = (req: Request, res: Response) => {
  console.log("Successfully Authenticated Super");
  res.status(200).json("Success Super Authenicated");
};
const authResetPass = (req: Request, res: Response) => {
    console.log("Successfully Authenticated User");
    res.status(200).json("Success User Authenicated");
};

module.exports = { login, sign_up, logOutUser, authUser, authAdmin, authSuper,forgotPassword,resetPassword,authResetPass };
