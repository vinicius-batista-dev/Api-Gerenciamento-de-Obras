const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./utils/swaggerDocument");
const db = require("./models");
var corsOptions = {
  origin: "http://localhost:3000",
};

const port = process.env.PORT || 4000;

//https://api-cloud-gerencia.herokuapp.com

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var options = {
  swaggerOptions: {
    persistAuthorization: true,
  },
};

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Database with { force: true }");
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.get("/teste", (req, res) => {
  res.send("App gerenciamento de obras working");
});

require("./routes/user-routes")(app);
require("./routes/funcionario-routes")(app);
require("./routes/construcao-routes")(app);
require("./routes/produtos-routes")(app);

app.listen(port, () => console.log("Server is running!", port));
