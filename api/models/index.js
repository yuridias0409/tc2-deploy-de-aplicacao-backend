const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = "mongodb+srv://yuri-dias-tc2:7u3QBh6BqXj7iz4@cluster0.jzz9v.mongodb.net/tc2DB?retryWrites=true&w=majority";
db.pessoa = require("./Pessoa")(mongoose);
module.exports = db;