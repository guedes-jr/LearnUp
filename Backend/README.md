# **Projeto Backend - Django + PostgreSQL com Docker**

Este projeto é um backend desenvolvido em Django, com PostgreSQL configurado através do Docker para garantir um ambiente de desenvolvimento isolado e fácil de configurar.

## **Requisitos**

Antes de iniciar, certifique-se de ter o seguinte instalado em sua máquina:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## **Passo a Passo para Rodar o Projeto**

### **1. Clone o Repositório**

Clone o repositório do projeto para o seu ambiente local:

```bash
git clone https://seu-repositorio.git
cd nome-do-repositorio
```

### **2. Configurar o Docker**

O projeto já vem com a configuração do **Docker Compose**, que orquestra os containers do Django e do PostgreSQL. O Docker Compose vai garantir que os containers sejam criados e configurados corretamente.

### **3. Criar o Arquivo de Dependências**

Caso ainda não tenha o arquivo `requirements.txt` (por exemplo, se não o tiver clonado ainda), crie-o com as dependências essenciais para o Django e o PostgreSQL:

```txt
django
psycopg2-binary
```

### **4. Subir o Ambiente com Docker Compose**

Com tudo configurado, agora podemos subir os containers do **Django** e **PostgreSQL**. No diretório raiz do projeto, execute o seguinte comando para construir e iniciar os containers:

```bash
docker-compose up --build
```

Este comando faz o seguinte:
- **Build**: Constrói as imagens dos containers.
- **Up**: Inicia os containers de acordo com as configurações no `docker-compose.yml`.

Durante o processo, o Docker fará o download da imagem do **PostgreSQL** e do **Django** (se estiver configurado para rodar dentro de um container).

### **5. Acessar o Projeto no Navegador**

Após os containers estarem rodando, o servidor Django estará disponível em `http://localhost:8000/`. Acesse este endereço no seu navegador e você verá a página inicial do Django, o que significa que o projeto está funcionando corretamente.

### **6. Rodar as Migrações do Banco de Dados**

O Django precisa aplicar as migrações para criar as tabelas necessárias no banco de dados PostgreSQL. Para isso, rode o seguinte comando:

```bash
docker-compose exec web python manage.py migrate
```

Esse comando executa as migrações dentro do container **web** (onde o Django está rodando).

### **7. Criar um Superusuário (opcional)**

Se você quiser acessar o painel de administração do Django, você pode criar um superusuário com o seguinte comando:

```bash
docker-compose exec web python manage.py createsuperuser
```

Digite o nome de usuário, email e senha quando solicitado.

### **8. Verificar os Logs**

Se houver problemas ou você quiser verificar se tudo está funcionando corretamente, você pode visualizar os logs dos containers com o seguinte comando:

```bash
docker-compose logs
```

Esse comando exibe os logs de execução dos containers, incluindo qualquer erro ou problema que tenha ocorrido.

### **9. Parar os Containers**

Quando terminar, você pode parar os containers com o comando:

```bash
docker-compose down
```

Isso interrompe e remove os containers, mas mantém os dados persistentes do PostgreSQL no volume configurado (`postgres_data`), o que garante que os dados não sejam perdidos.

### **10. Excluir Containers e Volumes (opcional)**

Se você quiser excluir completamente os containers e os volumes (dados do banco de dados), execute:

```bash
docker-compose down -v
```

Isso removerá tanto os containers quanto os volumes associados.

---

## **Estrutura do Projeto**

A estrutura do projeto após a configuração com Docker será a seguinte:

```
my_project/
│
├── backend/                     # Diretório do projeto Django
│   ├── backend/                 # Arquivo de configurações do Django
│   │   ├── __init__.py
│   │   ├── settings.py          # Configurações do Django
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── ...
│   ├── manage.py                # Script de gerenciamento do Django
│   ├── requirements.txt         # Dependências do projeto
│   ├── Dockerfile               # Arquivo de configuração do Docker para o backend Django
│   ├── docker-compose.yml       # Configuração do Docker Compose (contém o PostgreSQL e o Django)
│   └── ...
│
├── postgres_data/               # Volume do Docker (dados persistentes do PostgreSQL)
│
├── .gitignore                   # Ignorar arquivos específicos para controle de versão
└── README.md                    # Documento de instrução do projeto (este arquivo)
```

---

## **Considerações Finais**

Com o Docker, você tem um ambiente de desenvolvimento totalmente isolado, o que facilita o processo de configuração e garante que você tenha o mesmo ambiente em qualquer máquina. Além disso, o uso do **Docker Compose** torna o gerenciamento de múltiplos containers, como o Django e o PostgreSQL, muito mais fácil.

Se tiver dúvidas ou encontrar problemas, consulte os logs do Docker ou entre em contato com a equipe de desenvolvimento!

---