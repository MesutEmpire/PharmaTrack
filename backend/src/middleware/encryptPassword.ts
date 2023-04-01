const bcrypt = require("bcrypt");
//
const encryptPass = (password: any) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .genSalt()
      .then((salt: any) => {
        bcrypt.hash(password, salt).then((hash: any) => {
          // return  password = hash
          resolve(hash);
        });
      })
      .catch(() => reject("Failed to Gen Salt"));
  });
};

const checkPassword = (password: any, response: any) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(password, response.password)
      .then((result: any) => {
        if (result) {
          resolve(response);
        }
        reject({ message: "Wrong Password" });
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

module.exports = { encryptPass, checkPassword };
