module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'API Gerenciamento de Obras',
        version: '1.0.0',
        description: 'Api para administrar sua empresa de construção civil',
        license: {
            name: 'MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
    },
    servers: [
        {
            url: 'http://localhost:4000',
            description: 'Produto server',
        },
    ],

    paths: {
        '/api/produtos': {
            get: {
                tags: ['Produtos'],
                description: 'Retorna todos os produtos',
                operationId: 'getProdutos',
                parameters: [],
                responses: {
                    '200': {
                        description: 'Produtos were obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produtos',
                                },
                            },
                        },
                    },
                    '500': {
                        description: 'Server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                            },
                        },
                    },
                },
            },
            post: {
                tags: ['Produtos'],
                description: 'Cria um novo produto',
                operationId: 'createProduto',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Produtos',
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    '200': {
                        description: 'Produto was created',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produtos',
                                },
                            },
                        },
                    },
                    '500': {
                        description: 'Server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                            },
                        },
                    },
                },
            },
        },
        '/api/produtos/{id}': {
            get: {
                tags: ['Produtos'],
                description: 'Retorna um produto específico',
                operationId: 'getProduto',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'ID do produto',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int64',
                        },
                    },
                ],
                responses: {
                    '200': {
                        description: 'Produto was obtained',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produtos',
                                },
                            },
                        },
                    },
                    '500': {
                        description: 'Server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                            },
                        },
                    },
                },
            },
            put: {
                tags: ['Produtos'],
                description: 'Atualiza um produto específico',
                operationId: 'updateProduto',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'ID do produto',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int64',
                        },
                    },
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Produtos',
                            },
                        },
                    },
                    required: true,
                },
                responses: {
                    '200': {
                        description: 'Produto was updated',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produtos',
                                },
                            },
                        },
                    },
                    '500': {
                        description: 'Server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                            },
                        },
                    },
                },
            },
            delete: {
                tags: ['Produtos'],
                description: 'Deleta um produto específico',
                operationId: 'deleteProduto',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'ID do produto',
                        required: true,
                        schema: {
                            type: 'integer',
                            format: 'int64',
                        },
                    },
                ],
                responses: {
                    '200': {
                        description: 'Produto was deleted',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Produtos',
                                },
                            },
                        },
                    },
                    '500': {
                        description: 'Server error',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Error',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            Produtos: {
                type: 'object',
                properties: {

                    nomeDoProduto: {
                        type: 'string',
                    },
                    descricaoDoProduto: {
                        type: 'string',
                    },
                    vaiUsarParaQue: {
                        type: 'string',
                    },
                    qtdProduto: {
                        type: 'integer',
                        format: 'int64',
                    },

                },
            },
            Error: {
                type: 'object',
                properties: {
                    code: {
                        type: 'integer',
                        format: 'int32',
                    },
                    message: {
                        type: 'string',
                    },
                },
            },
        },
    },
    

};
