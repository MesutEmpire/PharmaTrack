const nodemailer = require('nodemailer')
require('dotenv').config()
const transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
})


interface mailOptions{
    from: string,
    to: string,
    subject: string,
    html:any
}



const sendResetLink = (details:mailOptions)=>{
   return  new Promise((resolve, reject) => {
        transporter.sendMail(details, (error:any, info:any) => {
            if (error) {
                reject(error.message);
            } else {
                resolve(`Email sent:  ${info.response}`)
            }
        });
    })
}

module.exports = {sendResetLink}