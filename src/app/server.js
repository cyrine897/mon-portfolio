const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, interest, message } = req.body;

  try {
    // Configurer Nodemailer pour Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mezzicyrine84@gmail.com',       // ton email Gmail
        pass: 'kdev hqfo ogfg tbsb',       // mot de passe d'application généré
      },
    });

    const mailOptions = {
      from: email,                          // email de l'expéditeur (formulaire)
      to: 'mezzicyrine84@gmail.com',        // ton email pour recevoir les messages
      subject: `Nouveau message de ${firstName} ${lastName} (${interest})`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email envoyé avec succès !' });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erreur lors de l’envoi du mail', error });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});