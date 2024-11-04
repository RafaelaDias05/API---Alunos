const express = require('express');
const { create, update, remove, findAll, findOne } = require('./repositories/alunosRepository');

const app = express();
const port = 3000;

app.use(express.json());

// Middleware para tratamento de erros globais
// Alteração realizada por Valdiney de Vasconcelos Nardes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

// Validação de dados para criação e atualização
// Alteração realizada por Valdiney de Vasconcelos Nardes
const validateAlunoData = (req, res, next) => {
    const { nome, email, nome_curso } = req.body;
    if (!nome || !email || !nome_curso) {
        return res.status(400).json({ error: 'Todos os campos (nome, email, nome_curso) são obrigatórios' });
    }
    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email inválido' });
    }
    next();
};

// Endpoint para criar um aluno
app.post('/alunos', validateAlunoData, async (req, res, next) => {
    try {
        const { nome, email, nome_curso } = req.body;
        const aluno = await create({ nome, email, nome_curso });
        res.status(201).json(aluno);
    } catch (error) {
        next(error); // Alteração realizada por Valdiney de Vasconcelos Nardes
    }
});

// Endpoint para listar todos os alunos
app.get('/alunos', async (req, res, next) => {
    try {
        const alunos = await findAll();
        res.json(alunos);
    } catch (error) {
        next(error); // Alteração realizada por Valdiney de Vasconcelos Nardes
    }
});

// Endpoint para buscar um aluno por ID
app.get('/alunos/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const aluno = await findOne(id);
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.json(aluno);
    } catch (error) {
        next(error); // Alteração realizada por Valdiney de Vasconcelos Nardes
    }
});

// Endpoint para atualizar um aluno
app.put('/alunos/:id', validateAlunoData, async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nome, email, nome_curso } = req.body;
        const aluno = await update(id, { nome, email, nome_curso });
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.json(aluno);
    } catch (error) {
        next(error); // Alteração realizada por Valdiney de Vasconcelos Nardes
    }
});

// Endpoint para excluir um aluno
app.delete('/alunos/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await remove(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        // Alteração realizada por Valdiney de Vasconcelos Nardes
        res.status(200).json({ message: 'Aluno removido com sucesso' });
    } catch (error) {
        next(error); // Alteração realizada por Valdiney de Vasconcelos Nardes
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
