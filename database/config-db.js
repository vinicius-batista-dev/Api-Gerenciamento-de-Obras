module.exports = {
  // mysql://b2079f52a2a0bf:18b20432@us-cdbr-east-06.cleardb.net/heroku_2073765da9587cd?reconnect=true

  host: "lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "wzccsrd3y3kx9r2x",
  password: "hcb74nwgr1a2inur",
  database: "e0vm9zabqp6u7o6j",
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
