// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// const nodemailer = require("nodemailer");
// // async..await is not allowed in global scope, must use a wrapper
// async function sendMail() {
//     let transporter = nodemailer.createTransport({
//         host: '',
//         port: ,
//         secure: true, 
//         auth: {
//             user: 'lucasoliveira.alisson@gmail.com', 
//             pass: 'xsmtpsib-c17123dac58b6b476b29abe31c9c86382e4f7c5a73e53dea68d328d2e564151d-R5LZAkM2D1yrGmhY', 
//         },
//     });

//     let info = await transporter.sendMail({
//         from: `Alisson <lucasoliveira.alisson@gmail.com>`, // sender address
//         to: 'lucasoliveira.alisson@jogga.com.br',
//         subject: "✔ Sending from Amazon SES ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
// }

// sendMail().catch(console.error);

/*
Create a .env file, replacing the values below

$ npm install nodemailer
$ npm install dotenv
$ node sendmail.js

SMTP_FROM_NAME=Mailer
SMTP_FROM_EMAIL=noreply@example.com
SMTP_USER=ASDWERWSDF
SMTP_PASS=SDFWRQWERWR
SMTP_HOST=email-smtp.ap-southeast-1.amazonaws.com
SMTP_PORT=465

SMTP_TO_EMAIL=user1@example.com, user2@example.com
*/

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "lucasoliveira.alisson@gmail.com", // Your email where you'll receive emails
      from: "Gradiarte <lucasoliveira.alisson@gmail.com>", // your website email address here
      subject: `[Contato pelo site]`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
        <body>
            <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>Você recebeu um novo contato através do site!! <br> nome: ${req.body.name},<br> email: ✉️${req.body.email}<br> telefone: ${req.body.phone}<br></h3> 
                    <h3>Nome da empresa: ${req.body.enterprise},<br> quantidade de metros: ${req.body.meters},<br> tipo de produto: ${req.body.product}</h3>
                </div>
            </div>
        </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

