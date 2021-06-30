module.exports = app => {
    const pessoa = require("../controllers/PessoaController");
  
    var router = require("express").Router();
  
    // Insere novo produto
    router.post("/", pessoa.create);
  
    // Retorna todos produto
    router.get("/", pessoa.listAll);
  
    // // Retorna o produto dado seu ID
    router.get("/:id", pessoa.listOne);
  
    // // Atualiza o produto dado seu ID
    router.put("/:id", pessoa.update);
  
    // // Remove um produto dado seu id
    router.delete("/:id", pessoa.delete);
  
    app.use('/api/pessoa', router);
};