module.exports = {
  // mysql://b2079f52a2a0bf:18b20432@us-cdbr-east-06.cleardb.net/heroku_2073765da9587cd?reconnect=true

  host: "us-cdbr-east-06.cleardb.net",
  user: "b2079f52a2a0bf",
  password: "18b20432",
  database: "heroku_2073765da9587cd",
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
