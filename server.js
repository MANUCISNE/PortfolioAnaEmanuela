import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import https from 'https';

dotenv.config();

const PORT = process.env.PORT;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

const app = express();

app.use(express.json());
app.use(cors());

// Rota para lidar com o formulário
app.post('/', cors(), (req, res) => {
    const { nome, email, mensagem } = req.body;

    fetch(WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify({
            'name': nome,
            'email': email,
            'message': mensagem,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(() => res.status(200).json({ message: 'Email enviado' }))
    .catch(error => {
        res.status(500).json({ message: error.toString() });
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});