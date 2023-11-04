import nodemailer from "nodemailer";

const sendEmail = (config) => {
  // SMTP server config and login
  const transporter = nodemailer.createTransport({
    service: "gmail",
    logger: true,
    debug: true,
    auth: config.login,
  });

  // Email content
  const mailOptions = config.options;

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`\nError sending email: ${error.message}\n`);
    } else {
      console.log(`\nEmail sent successfully: ${info.response}\n`);
    }
  });
};

export default sendEmail;
