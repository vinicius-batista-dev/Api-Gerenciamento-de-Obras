const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const apiprodutos = require("./docs/apiprodutos.js");

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./models");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("App gerenciamento de obras working");
});

require("./routes/user-routes")(app);
require("./routes/funcionario-routes")(app);
require("./routes/construcao-routes")(app);
require("./routes/produtos-routes")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
