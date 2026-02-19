# Teste-T-cnico---Consulta-ao-reposit-rio-Github
Realiza uma consulta ao repositório do Github buscando pelo nome do usuário usando o framework NodeJs

# Instalar nodemon

npm install nodemon--save - dev


# alterar o package.json

"scripts": {
    "dev": "nodemon server.js"
}

# Rodar o docker dev com reload

docker run - p 3000: 3000 - v $(pwd):/app node-app npm run dev

# subir o container do repositório

docker composer up--build

