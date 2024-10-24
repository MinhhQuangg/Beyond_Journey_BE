const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

// const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: 'Tours Website <Hello@gmail.com>',
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };
//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;

module.exports = class Email {
  constructor(user, url) {
    (this.to = user.email),
      (this.firstName = user.name.split(' ')[0]),
      (this.url = url),
      //!CHANGE EMAIL
      (this.from = `Beyond Journey <${process.env.GMAIL_FROM}>`);
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.GMAIL_USERNAME,
          pass: process.env.GMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false, // Optional: only if you're facing issues with self-signed certs
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const templatePath = path.join(__dirname, '../views', `${template}.ejs`);
    const html = ejs.render(fs.readFileSync(templatePath, 'utf-8'), {
      name: this.firstName,
      url: this.url,
      subject,
    });
    // const text = htmlToText.fromString(html);
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to Beyond Journey');
  }

  async sendPasswordReset() {
    await this.send('password', `Reset Token`);
  }
};
