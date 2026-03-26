#!/bin/bash

GIT_NAME="Gustavo Camargo"
GIT_EMAIL="gustavocamargo203@gmail.com"
COMMIT_MSG="Atualizacao automatica"


echo "Configurando usuario..."
git config user.name "$GIT_NAME"
git config user.email "$GIT_EMAIL"

echo "Adicionando arquivos..."
git add .

echo "Criando commit..."
git commit -m "$COMMIT_MSG"

echo "Enviando para o repositorio..."
git push

echo "Processo finalizado!"