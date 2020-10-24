const nodemailer = require('nodemailer'); 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'salomondrin222@gmail.com',
        pass: 'cawi520740'
    }
});

module.exports=transporter;