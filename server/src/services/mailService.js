const nodemailer = require("nodemailer");

const mailService = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jovany51@ethereal.email",
      pass: "DUCPWf7GehxQkD6mDJ",
    },
  });

  const mailOptions = {
    from: "AnimalShelter@belarus.com",
    to: req.body.email,
    subject: "Спасибо за заявку!",
    text: `ЗдравствуйтеВаше сообщение: ${req.body.message}`,
    html: `<h2>Здравствуйте, ${req.body.name || "гость"}!</h2>
          <br> 
          <span>В ответ на Ваше сообщение: <i>"${
            req.body.message
          }"</i>, спешим сообщить, что Ваша заявка принята и будет рассмотрена в ближайшее время</span><br>
          <h3>Спасибо за проявленный интерес</h3>
          `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent");
    }
  });
};

module.exports = { mailService };
