module.exports = {
  host: "127.0.0.1",
  user: "vinicius",
  password: "admin123",
  database: "api-gerenciamento-obras",
  port: 3306,
  dialect: "mysql",
  protocol: "mysql",

  pool: {
    max: 2,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
