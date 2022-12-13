module.exports = {
  // mysql://b67122149d29b1:5f2e179d@us-cdbr-east-06.cleardb.net/heroku_5fb386e58c5e48e?reconnect=true
  host: "127.0.0.1",
  user: "vinicius",
  password: "admin123",
  database: "app",
  port: 3306,
  dialect: "mysql",
  protocol: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
