const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Gerenciamento de Alunos",
      version: "1.0.0",
      description: "API RESTful para gerenciamento de alunos",
      contact: {
        name: "Administrador",
        email: "admin@exemplo.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desenvolvimento",
      },
    ],
  },
  apis: ["./swagger.js"], // Arquivo onde as rotas serão documentadas
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
