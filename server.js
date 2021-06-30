var express = require('express'),
    app = express(),
    port = process.env.PORT;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose');

//establish connection to database
mongoose.connect(
    'mongodb+srv://yuri-dias-tc2:7u3QBh6BqXj7iz4@cluster0.jzz9v.mongodb.net/tc2DB?retryWrites=true&w=majority',
    { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

require("./api/routes/PessoaRoute")(app);

app.listen(port);
