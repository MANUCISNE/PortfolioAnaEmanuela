import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config();

const USER_EMAIL = process.env.EMAIL_USER;
const USER_EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const PORT = "http://localhost:3003";

const app = express();
app.use(express.json());
app.use(cors());

// Rota para lidar com o formulário
app.post('/', cors(), async (req, res) => {
    const { nome, email, mensagem } = req.body;

    // Opções do email
    const mailOptions = {
        from: email,
        subject: 'Novo Email do Formulário do Portfólio',
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    // Assuming you have the necessary data for the fetch request
    const webhookUrl = 'https://hook.us1.make.com/vjco8qv1iee2w1hrvw0fgjdivvqn356p';
    const data = mailOptions;

    try {
        // Send email (you can add your email sending logic here)

        // Make a fetch request to the webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${Buffer.from(`${USER_EMAIL}:${USER_EMAIL_PASSWORD}`).toString('base64')}`,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Webhook request successful');
        } else {
            console.error('Webhook request failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error sending webhook request:', error.message);
    }

    res.status(200).json({ message: 'Email sent and webhook request initiated' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
