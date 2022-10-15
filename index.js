const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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

require('./routes/user-routes')(app);
require('./routes/funcionario-routes')(app);
require('./routes/construcao-routes')(app);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
