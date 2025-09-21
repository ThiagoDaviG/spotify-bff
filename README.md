🎵 Spotify Clone - Backend
📌 Sobre o projeto

Este é o backend do projeto Spotify-NTT, desenvolvido em Node.js com Express.
Ele atua como intermediário entre o frontend e a API oficial do Spotify, obtendo o token de autenticação e retornando dados de artistas, álbuns e músicas.

🚀 Tecnologias utilizadas:
Node.js (v18+ recomendado) - versão utilizada para desenvolvimento: v22.19.0
Express
Axios
Dotenv

📦 Pré-requisitos:
Node.js instalado
Conta no Spotify for Developers
Client ID e Client Secret configurados no arquivo .env

⚙️ Instalação:
Clone o repositório:
git clone <url-do-repo-backend>

Acesse a pasta:
cd backend

Instale as dependências com:
npm install

Crie o arquivo .env com suas credenciais:
SPOTIFY_CLIENT_ID=seu_client_id
SPOTIFY_CLIENT_SECRET=seu_client_secret
PORT=3000

client_id utilizado: 9bacdee796c749a9860e9b8b65c301bf
client_secret utilizado: 56bf6d8ad62748068c31706617f55896

▶️ Para rodar o servidor:
node index.js

A API estará disponível em:
👉 http://localhost:3000

📡 Rotas principais:
GET /artists/:name → busca artistas no Spotify
GET /artist/:id → detalhes de um artista
