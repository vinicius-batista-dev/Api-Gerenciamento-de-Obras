module.exports = {
  // mysql://b67122149d29b1:5f2e179d@us-cdbr-east-06.cleardb.net/heroku_5fb386e58c5e48e?reconnect=true
  host: "us-cdbr-east-06.cleardb.net",
  user: "bf4cd1feab5b38",
  password: "447be6f5",
  database: "heroku_693666036cd9deb",
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
