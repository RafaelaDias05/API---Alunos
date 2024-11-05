# API REST - Gerenciamento de Alunos 🎓

API RESTful desenvolvida em Node.js e Express para gerenciamento de alunos, oferecendo operações CRUD completas com validações e tratamento de erros.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- Swagger (Documentação)
- Express Middleware (Validação e Tratamento de Erros)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Git

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/api-alunos.git
```

2. Acesse o diretório do projeto:
```bash
cd api-alunos
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor:
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Documentação da API

A documentação completa da API está disponível através do Swagger UI em:
```
http://localhost:3000/api-docs
```

### 🛣️ Endpoints Disponíveis

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /alunos | Cria um novo aluno |
| GET | /alunos | Lista todos os alunos |
| GET | /alunos/:id | Busca um aluno específico |
| PUT | /alunos/:id | Atualiza um aluno |
| DELETE | /alunos/:id | Remove um aluno |

### 📝 Estrutura do Objeto Aluno

```json
{
  "id": "string",
  "nome": "string",
  "email": "string",
  "nome_curso": "string"
}
```

## 🔒 Validações

A API inclui as seguintes validações:
- Campos obrigatórios (nome, email, nome_curso)
- Formato de email válido
- Tratamento de erros para registros não encontrados

## 🚦 Códigos de Status HTTP

- 200: Sucesso
- 201: Criado com sucesso
- 400: Erro de validação
- 404: Registro não encontrado
- 500: Erro interno do servidor

## 🔍 Exemplos de Uso

### Criar um novo aluno
```bash
curl -X POST http://localhost:3000/alunos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@email.com",
    "nome_curso": "Engenharia de Software"
  }'
```

### Listar todos os alunos
```bash
curl http://localhost:3000/alunos
```


