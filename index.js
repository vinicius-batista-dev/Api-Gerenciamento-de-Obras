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
    title: "Gerenciamento de Obras API",
    version: "1.0.0",
    description:
      "Uma api para gerenciamento de obras, com cadastro de funcionários, produtos e construções",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
    },
  ],

  paths: {
    "/api/auth/signup": {
      post: {
        tags: ["User"],
        description: "Create a new user",
        operationId: "signup",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "User created",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
    "/api/auth/signin": {
      post: {
        tags: ["User"],
        description: "Login a user",
        operationId: "produtos",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "User logged in",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
    "/api/produtos": {
      post: {
        tags: ["Produtos"],
        description: "Criando um novo produto",
        operationId: "Produto",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Produto",
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "Produto created",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Produto",
                },
              },
            },
          },
          500: {
            description: "Server error",
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
        tags: ["Funcionario"],
        description: "Criando um novo funcionario",
        operationId: "Funcionario",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Funcionario",
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "Funcionario criado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Funcionario",
                },
              },
            },
          },
          500: {
            description: "Server error",
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
        description: "Criando um nova construcao",
        operationId: "Construcao",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Construcao",
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "Construcao criado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Construcao",
                },
              },
            },
          },
          500: {
            description: "Server error",
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
        scheme: "bearer",
        bearerFormat: "JWT",
        type: "http",
      },
    },

    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          username: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      Produto: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          nomeDoProduto: {
            type: "string",
          },
          descricaoDoProduto: {
            type: "string",
          },
          vaiUsarParaQue: {
            type: "string",
          },
          qtdProduto: {
            type: "integer",
            format: "int64",
          },
          valorDoProduto: {
            type: "integer",
            format: "int64",
          },
        },
      },
      Funcionario: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          nomeDoFuncionario: {
            type: "string",
          },
          telefoneDoFuncionario: {
            type: "string",
          },
          cpfDoFuncionario: {
            type: "string",
          },
          emailDoFuncionario: {
            type: "string",
          },
          cargoDoFuncionario: {
            type: "string",
          },
          salarioDoFuncionario: {
            type: "string",
          },
        },
      },
      Construcao: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          descricao: {
            type: "string",
          },
          dataInicio: {
            type: "DATE",
          },
          dataFim: {
            type: "DATE",
          },
          horaInicio: {
            type: "TIME",
          },
          horaFim: {
            type: "TIME",
          },
        },
      },
    },
  },
};

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

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
