const express = require('express');
const express = require('express');
const { create, update, remove, findAll, findOne } = require('./repositories/alunosRepository');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/alunos', (req, res) => {
    const {nome, email, nome_curso} = req.body;
    const aluno = create({nome, email, nome_curso});
    res.status(201).json(aluno);
});

app.get('/alunos', (req, res) => { 
    const alunos = findAll();
    res.json(alunos);
    })

app.get('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const aluno = findOne(id);
    res.json(aluno);

})

app.put('/alunos/:id', (req, res) =>{
    const { id } = req.params;
    const {nome, email, nome_curso} = req.body;
    const aluno = update(id, {nome, email, nome_curso});
    res.json(aluno);
})



    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });