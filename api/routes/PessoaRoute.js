module.exports = app => {
    const pessoa = require("../controllers/PessoaController");
  
    var router = require("express").Router();
  
    // Insere nova pessoa
    router.post("/", pessoa.create);
  
    // Retorna todas pessoas
    router.get("/", pessoa.listAll);
  
    // // Retorna a pessoa dado seu ID
    router.get("/:id", pessoa.listOne);
  
    // // Atualiza a pessoa dado seu ID
    router.put("/:id", pessoa.update);
  
    // // Remove uma pessoa dado seu id
    router.delete("/:id", pessoa.delete);
  
    app.use('/api/pessoa', router);
};