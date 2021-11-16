const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'helymara@uninorte.edu.co',
    pass: 'gwrabjtgnvahnsko',
  },
});

module.exports = transporter;
