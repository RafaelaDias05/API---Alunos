// Importa a função `v4` do pacote `uuid` para gerar identificadores únicos para cada aluno
const { v4: uuidv4 } = require('uuid');

// Array para armazenar a lista de alunos em memória
let alunos = [];

// Função para criar um novo aluno
function create({ nome, email, nome_curso }) {
    // Cria um objeto aluno com um ID único e os dados fornecidos
    const aluno = {
        id: uuidv4(), // Gera um ID único para o aluno
        nome,
        email,
        nome_curso
    };
    // Adiciona o aluno ao array `alunos`
    alunos.push(aluno);
    // Retorna o aluno criado
    return aluno;
}

// Função para atualizar um aluno existente
function update(id, { nome, email, nome_curso }) {
    // Encontra o índice do aluno no array `alunos` usando o ID
    const indice = alunos.findIndex(aluno => aluno.id === id);
    // Se o aluno não for encontrado, retorna `null`
    if (indice === -1) {
        return null;
    }
    // Atualiza o aluno no índice encontrado com os novos dados
    alunos[indice] = {
        id, // Mantém o mesmo ID
        nome,
        email,
        nome_curso
    };
    // Retorna o aluno atualizado
    return alunos[indice];
}

// Função para remover um aluno pelo ID
function remove(id) {
    // Encontra o índice do aluno no array `alunos` usando o ID
    const indice = alunos.findIndex(aluno => aluno.id === id);
    // Se o aluno não for encontrado, retorna `false`
    if (indice === -1) {
        return false;
    }
    // Remove o aluno do array `alunos` usando o índice
    alunos.splice(indice, 1);
    // Retorna `true` para indicar que a remoção foi bem-sucedida
    return true;
}

// Função para retornar a lista completa de alunos
function findAll() {
    return alunos;
}

// Função para encontrar um aluno pelo ID
function findOne(id) {
    // Procura o aluno no array `alunos` usando o ID
    const aluno = alunos.find(aluno => aluno.id === id);
    // Retorna o aluno encontrado ou `null` se não existir
    return aluno || null;
}

// Exporta as funções para uso em outros módulos
module.exports = {
    create,
    update,
    remove,
    findAll,
    findOne
};