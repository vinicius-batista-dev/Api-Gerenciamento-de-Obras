module.exports = {
  // mysql://b67122149d29b1:5f2e179d@us-cdbr-east-06.cleardb.net/heroku_5fb386e58c5e48e?reconnect=true
  host: "us-cdbr-east-06.cleardb.net",
  user: "b7fd05ef4367ba",
  password: "90da6866",
  database: "heroku_55774f2169ece35",
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
