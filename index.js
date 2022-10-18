const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express')

const apiprodutos = require('./docs/apiprodutos.js')

const port = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require('./models');

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(apiprodutos));


require('./routes/user-routes')(app);
require('./routes/funcionario-routes')(app);
require('./routes/construcao-routes')(app);
require('./routes/produtos-routes')(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
