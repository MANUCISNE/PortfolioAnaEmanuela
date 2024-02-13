import nodemailer from "nodemailer";
import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const USER_EMAIL = process.env.EMAIL_USER;
const USER_EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

// Rota para lidar com o formulário
app.post('/', cors(), (req, res) => {
    const { nome, email, mensagem } = req.body;
    
  // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: USER_EMAIL,
            pass: USER_EMAIL_PASSWORD,
        },
    });

  // Opções do email
    const mailOptions = {
        from: email,
        to:  USER_EMAIL,// Pode ser o mesmo ou outro email   
        subject: 'Novo Email do Formulário do Portfólio',
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

  // Enviar o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        return res.status(500).send(error.toString());
        }
        res.status(200).send('Email enviado: ' + info.response);
    });
});

    // Iniciar o servidor
    app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    });
