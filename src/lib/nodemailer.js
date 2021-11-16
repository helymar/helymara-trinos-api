const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'trinosapihelymar@gmail.com',
    pass: 'password',
  },
});

module.exports = transporter;
