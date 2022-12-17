const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const db = require("./models");
const swaggerDocument = require("./utils/swaggerDocument");

const port = process.env.PORT || 5000;

//https://api-cloud-gerencia.herokuapp.com

const app = express();

app.use(cors());

app.use(express.json());

var options = {
  swaggerOptions: {
    persistAuthorization: true,
  },
};

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

// db.sequelize.sync({
//   force: false,
// });

app.listen(port, () => console.log("Server is running!", port));
