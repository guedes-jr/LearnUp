# Usando a imagem base do Python
FROM python:3.10

# Atualizar o pip para a versão mais recente
RUN pip install --upgrade pip

# Instalando dependências de compilação
RUN apt-get update && apt-get install -y gcc libpq-dev

# Definindo o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de requisitos para o diretório de trabalho
COPY requirements.txt /app/

# Instalar as dependências do projeto
RUN pip install -r requirements.txt

# Copiar o restante do código do projeto para dentro do container
COPY . /app/

# Comando para rodar o servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]