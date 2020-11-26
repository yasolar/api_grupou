const express = require("express");
const bodyParser = require("body-parser");
const db = require('./app/db/models');

db.sequelize.sync({force: true}).then(()=>{
    console.log('Tabelas criadas!');
})

const app = express();

//middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "API GRUPOU V.0.1"})
});

//Rotas
require("./app/routes")(app);

app.listen(3000, () => {
    console.log("Servidor rodando :)");
});
