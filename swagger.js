/**
 * @swagger
 * components:
 *   schemas:
 *     Aluno:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - nome_curso
 *       properties:
 *         id:
 *           type: string
 *           description: ID único do aluno
 *         nome:
 *           type: string
 *           description: Nome completo do aluno
 *         email:
 *           type: string
 *           description: Email do aluno
 *         nome_curso:
 *           type: string
 *           description: Nome do curso do aluno
 *       example:
 *         id: "1"
 *         nome: "João Silva"
 *         email: "joao@email.com"
 *         nome_curso: "Engenharia de Software"
 *
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Mensagem de erro
 */

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - nome_curso
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               nome_curso:
 *                 type: string
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista de alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aluno'
 */

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Busca um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Aluno encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       404:
 *         description: Aluno não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   put:
 *     summary: Atualiza um aluno
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - nome_curso
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               nome_curso:
 *                 type: string
 *     responses:
 *       200:
 *         description: Aluno atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       404:
 *         description: Aluno não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 *   delete:
 *     summary: Remove um aluno
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Aluno removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Aluno não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
