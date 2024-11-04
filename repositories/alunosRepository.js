const {v4: uuidv4} = require('uuid');

let alunos = []

function create({nome, email, nome_curso}){
    const aluno = {
        id: uuidv4(),
        nome,
        email,
        nome_curso
    };
    alunos.push(aluno);
    return vaga;
}

function update(id, {nome, email, nome_curso}){
    const indice = alunos.findIndex(aluno => aluno.id === id);
    if(indice === -1){
        return null;
    }
    alunos[indice] = {
        id,
        nome,
        email,
        nome_curso
    };
    return alunos[indice];
}

function remove(id){
    const indice = alunos.findIndex(aluno => aluno.id === id);
    if(indice === -1){
        return false;
    }
    alunos.splice(indice, 1);
    return true;
}

function findAll(){
    return alunos;
}

function findOne(id, {nome, email, nome_curso}){
    const indice = alunos.findIndex(aluno => aluno.id === id);
    if(indice === -1){
        return null;
    }
    return alunos[indice];
}

module.exports = {
    create,
    update,
    remove,
    findAll,
    findOne
}