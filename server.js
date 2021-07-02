const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    req.header("Access-Control-Allow-Methods", 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    //
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    app.use(cors())
    // Parseia também requisições do tipo HTML - application/x-www-form-urlencoded
    next();
});

// Uma rota, aceitando conexões na raiz e retornando um json simples
app.get("/", (req, res) => {
    res.json({ msg: "Está funcionando!" });
});

const db = require("./api/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conectado ao banco de dados");
    })
    .catch(err => {
        console.log("Não foi possível conectar ao banco de dados", err);
        process.exit();
    });

require("./api/routes/PessoaRoute")(app);

// "Executa" o servidor, escutando em uma porta específica.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}.`);
});