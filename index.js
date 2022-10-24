const app = require("express")();
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const db = require("./models");

const port = process.env.PORT || 4000;
const corsOptions = {
  origin: `http://localhost:${port}`,
};

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Projeto de Software Para Administração da sua obra",
    version: "1.0.0",
    description:
      "Uma sistema para gerenciamento de obras, com cadastro de funcionários, produtos e construções",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
    },
  ],

  paths: {
    "/api/auth/signup": {
      post: {
        tags: ["Auth"],
        summary: "Cria um novo usuário",
        description: "Cria um novo usuário",
        operationId: "signup",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Usuário criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          500: {
            description: "Erro ao criar um usuário",
          },
        },
      },
    },
    "/api/auth/signin": {
      post: {
        tags: ["Auth"],
        summary: "Faz o login do usuário",
        description: "Faz o login do usuário",
        operationId: "signin",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Usuário logado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          500: {
            description: "Erro ao fazer login",
          },
        },
      },
    },
    "/api/produtos": {
      post: {
        tags: ["Produtos"],
        summary: "Cria um novo produto",
        description: "Cria um novo produto",
        operationId: "create",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Produto",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Produto criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Produto",
                },
              },
            },
          },
          500: {
            description: "Erro ao criar um produto",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      get: {
        tags: ["Produtos"],
        summary: "Encontra todos os produtos",
        description: "Encontra todos os produtos",
        operationId: "findAll",
        responses: {
          200: {
            description: "Produtos encontrados com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Produto",
                },
              },
            },
          },
          500: {
            description: "Erro ao encontrar os produtos",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
    },
    "/api/produtos/{id}": {
      get: {
        tags: ["Produtos"],
        summary: "Encontra um produto pelo id",
        description: "Encontra um produto pelo id",
        operationId: "findOne",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id do produto",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "Produto encontrado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Produto",
                },
              },
            },
          },
          500: {
            description: "Erro ao encontrar o produto",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      put: {
        tags: ["Produtos"],
        summary: "Atualiza um produto pelo id",
        description: "Atualiza um produto pelo id",
        operationId: "update",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id do produto",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Produto",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Produto atualizado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Produto",
                },
              },
            },
          },
          500: {
            description: "Erro ao atualizar o produto",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      delete: {
        tags: ["Produtos"],
        summary: "Deleta um produto pelo id",
        description: "Deleta um produto pelo id",
        operationId: "delete",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id do produto",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "Produto deletado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Produto",
                },
              },
            },
          },
          500: {
            description: "Erro ao deletar o produto",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
    },

    "/api/funcionario": {
      post: {
        tags: ["Funcionarios"],
        summary: "Cria um funcionario",
        description: "Cria um funcionario",
        operationId: "create",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Funcionario",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Funcionario criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Funcionario",
                },
              },
            },
          },
          500: {
            description: "Erro ao criar um funcionario",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
    },
    "/api/funcionario/{id}": {
      get: {
        tags: ["Funcionarios por {ID}"],
        summary: "Busca um funcionario pelo ID",
        description: "Busca um funcionario pelo ID",
        operationId: "findById",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do funcionario",
            required: true,
            schema: {
              type: "integer",
              format: "int64",
            },
          },
        ],
        responses: {
          200: {
            description: "Funcionario encontrado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Funcionario",
                },
              },
            },
          },
          500: {
            description: "Erro ao buscar um funcionario",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      put: {
        tags: ["Funcionarios por {ID}"],
        summary: "Atualiza um funcionario pelo ID",
        description: "Atualiza um funcionario pelo ID",
        operationId: "updateById",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do funcionario",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Funcionario",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Funcionario atualizado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Funcionario",
                },
              },
            },
          },
          500: {
            description: "Erro ao atualizar um funcionario",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      delete: {
        tags: ["Funcionarios por {ID}"],
        summary: "Deleta um funcionario pelo ID",
        description: "Deleta um funcionario pelo ID",
        operationId: "deleteById",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID do funcionario",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Funcionario deletado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Funcionario",
                },
              },
            },
          },
          500: {
            description: "Erro ao deletar um funcionario",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
    },
    "/api/construcao": {
      post: {
        tags: ["Construcao"],
        summary: "Cria uma construcao",
        description: "Cria uma construcao",
        operationId: "create",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Construcao",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Construcao criada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Construcao",
                },
              },
            },
          },
          500: {
            description: "Erro ao criar uma construcao",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      get: {
        tags: ["Construcao"],
        summary: "Busca todas as construcoes",
        description: "Busca todas as construcoes",
        operationId: "findAll",
        responses: {
          200: {
            description: "Construcoes encontradas com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Construcao",
                },
              },
            },
          },
          500: {
            description: "Erro ao buscar construcoes",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      put: {
        tags: ["Construcao"],
        summary: "Atualiza uma construcao",
        description: "Atualiza uma construcao",
        operationId: "update",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Construcao",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Construcao atualizada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Construcao",
                },
              },
            },
          },
          500: {
            description: "Erro ao atualizar uma construcao",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      delete: {
        tags: ["Construcao"],
        summary: "Deleta uma construcao",
        description: "Deleta uma construcao",
        operationId: "delete",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Construcao",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Construcao deletada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Construcao",
                },
              },
            },
          },
          500: {
            description: "Erro ao deletar uma construcao",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
    },
    "/api/construcao/{id}": {
      get: {
        tags: ["Construcao por {ID}"],
        summary: "Busca uma construcao pelo ID",
        description: "Busca uma construcao pelo ID",
        operationId: "findById",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID da construcao",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Construcao encontrada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Construcao",
                },
              },
            },
          },
          500: {
            description: "Erro ao buscar uma construcao",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      put: {
        tags: ["Construcao por {ID}"],
        summary: "Atualiza uma construcao pelo ID",
        description: "Atualiza uma construcao pelo ID",
        operationId: "updateById",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID da construcao",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Construcao",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Construcao atualizada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Construcao",
                },
              },
            },
          },
          500: {
            description: "Erro ao atualizar uma construcao",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
      delete: {
        tags: ["Construcao por {ID}"],
        summary: "Deleta uma construcao pelo ID",
        description: "Deleta uma construcao pelo ID",
        operationId: "deleteById",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID da construcao",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Construcao",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Construcao deletada com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Construcao",
                },
              },
            },
          },
          500: {
            description: "Erro ao deletar uma construcao",
          },
        },
        security: [
          {
            bearer: [],
          },
        ],
      },
    },
  },

  components: {
    securitySchemes: {
      bearer: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Id do usuário",
          },
          username: {
            type: "string",
            description: "Nome do usuário",
          },
          email: {
            type: "string",
            description: "Email do usuário",
          },
          password: {
            type: "string",
            description: "Senha do usuário",
          },
        },
      },
      Funcionario: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Id do funcionario",
          },
          nomeDoFuncionario: {
            type: "string",
            description: "Nome do funcionario",
          },
          cpfDoFuncionario: {
            type: "string",
            description: "CPF do funcionario",
          },
          telefoneDoFuncionario: {
            type: "string",
            description: "Telefone do funcionario",
          },
          emailDoFuncionario: {
            type: "string",
            description: "Email do funcionario",
          },
          cargoDoFuncionario: {
            type: "string",
            description: "Cargo do funcionario",
          },
          salarioDoFuncionario: {
            type: "string",
            description: "Salario do funcionario",
          },
        },
      },
      Produto: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Id do produto",
          },
          nomeDoProduto: {
            type: "string",
            description: "Nome do produto",
          },
          descricaoDoProduto: {
            type: "string",
            description: "Descrição do produto",
          },
          qtdProduto: {
            type: "integer",
            description: "Quantidade do produto",
          },
          vaiUsarParaQue: {
            type: "string",
            description: "Vai usar para que",
          },
        },
      },
      Construcao: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Id da construção",
          },
          descricao: {
            type: "string",
            description: "Descrição da construção",
          },
          dataInicio: {
            type: "DATE",
            description: "Data de inicio da construção",
          },
          dataFim: {
            type: "DATE",
            description: "Data de fim da construção",
          },
          horaInicio: {
            type: "TIME",
            description: "Hora de inicio da construção",
          },
          horaFim: {
            type: "TIME",
            description: "Hora de fim da construção",
          },
        },
      },
    },
  },
};

db.sequelize.sync();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

http.createServer(app).listen(port);
console.log("Listening at:// port:%s (HTTP)", port);

var options = {
  swaggerOptions: {
    persistAuthorization: true,
  },
};

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.get("/", (req, res) => {
  res.send("App gerenciamento de obras working");
});

require("./routes/user-routes")(app);
require("./routes/funcionario-routes")(app);
require("./routes/construcao-routes")(app);
require("./routes/produtos-routes")(app);
