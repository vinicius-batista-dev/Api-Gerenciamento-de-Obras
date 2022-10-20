module.exports = {
  host: "localhost",
  user: "vinicius",
  password: "admin123",
  database: "api-gerencia",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
