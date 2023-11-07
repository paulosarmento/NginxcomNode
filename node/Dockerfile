# Use a imagem oficial do Node.js como base
FROM node:18

# Crie um diretório de trabalho
# USER node
WORKDIR /app

# RUN apt-get update && \
#     apt-get install -y wget netcat-traditional && \
#     wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
#     chmod +x /usr/bin/wait-for
# # Copie o arquivo package.json e o package-lock.json
COPY package*.json ./

# # Instale as dependências
RUN npm install

# # Copie todo o código-fonte para o contêiner
COPY . .

# Expõe a porta 3000 (porta em que a aplicação Node.js estará ouvindo)
EXPOSE 3000


# Comando para iniciar a aplicação
CMD [ "node", "index.js" ]
