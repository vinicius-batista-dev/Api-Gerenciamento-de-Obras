module.exports = {
  host: "us-cdbr-east-06.cleardb.net",
  user: "bc4f99da317e0f",
  password: "da3f2a46",
  database: "heroku_0bf3f2af96c99ce",
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
