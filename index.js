// carregando as variáveis do .env
require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Permite que o frontend faça as requisições
app.use(cors());

// Rota pra gerar o access_token
app.get('/token', async (req, res) => {
    try {
        const response = await axios.post( //fazendo a requisição POST com axios que retorna o token 
            'https://accounts.spotify.com/api/token', // endpoint oficial do spotify
            'grant_type=client_credentials',        // tipo de fluxo: Client Credentials
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // Authorization: Basic base64(client_id:client_secret)
                    'Authorization': 'Basic ' + Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')
                }
            }
        );

        // Retorna o token para o frontend
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Porta do backend já configurada no .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend rodando na porta: ${PORT}`));
