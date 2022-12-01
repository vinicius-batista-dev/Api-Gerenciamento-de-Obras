module.exports = {
  host: "database-1.cfuz2ey12lst.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  database: "exx0j37tuqbwzemk",
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
