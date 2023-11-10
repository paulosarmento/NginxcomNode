# Use a imagem oficial do Node.js como base
FROM node:20-slim

# Crie um diretório de trabalho
WORKDIR /app

# # Copie todo o código-fonte para o contêiner
COPY . .

# # Instale as dependências
RUN npm install

# Comando para iniciar a aplicação
CMD [ "node", "index.js" ]
