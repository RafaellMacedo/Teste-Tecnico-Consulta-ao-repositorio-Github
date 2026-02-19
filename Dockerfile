# imagem oficial Node
FROM node:20-alpine

# cria diretório da aplicação
WORKDIR /app

# copia dependências primeiro (cache)
COPY package*.json ./

# instala dependências
RUN npm install

# copia restante do projeto
COPY . .

# expõe porta
EXPOSE 5000

# comando inicial
CMD ["npm", "run", "dev"]
