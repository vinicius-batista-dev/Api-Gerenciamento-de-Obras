module.exports = {
  // mysql://b67122149d29b1:5f2e179d@us-cdbr-east-06.cleardb.net/heroku_5fb386e58c5e48e?reconnect=true
  host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "t5vtgrj9yoaqnft8",
  password: "cr9g9dd4f0sw10xn",
  database: "sbsdfumt4watdib3",
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
