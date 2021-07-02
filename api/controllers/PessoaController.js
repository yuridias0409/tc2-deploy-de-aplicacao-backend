const db = require("../models");
const Pessoa = db.pessoa;

// Adicionar uma nova pessoa
exports.create = (req, res) => {
    if (!req.body.nome || !req.body.idade || !req.body.foto) {
        res.status(400).send({ msg: "Requisição incompleta: dados ausentes" });
        return;
    }

    const pessoa = new Pessoa({
        nome: req.body.nome,
        idade: req.body.idade,
        foto: req.body.foto
    });

    // Salva no banco
    pessoa.save(pessoa).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};

// Retornar a lista de pessoas
exports.listAll = (req, res) => {
    var condition = {};

    Pessoa.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao obter lista de pessoas" })
    });
};

//Retornar uma pessoa específica
exports.listOne = (req, res) => {
    const id = req.params.id;

    Pessoa.findById(id).then(data => {
        if (!data) {
            res.status(404).send({ msg: "Pessoa não encontrada" });
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao obter dado com id=" + id })
    });
};

//Remover uma pessoa
exports.update = (req, res) => {
    if (!req.query) {
        res.status(400).send({ msg: "Dados inválidos" });
        return;
    }

    const id = req.params.id;

    Pessoa.findByIdAndUpdate(id, req.query).then(data => {
        if (!data) {
            res.status(400).send({ msg: "Não foi possível atualizar a Pessoa" })
        } else {
            res.send({ msg: "Pessoa atualizada com sucesso" });
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao atualizar a Pessoa" });
    });

};

//Remover uma pessoa específica
exports.delete = (req, res) => {
    const id = req.params.id;
    Pessoa.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(400).send({ msg: "Não foi possível remover a Pessoa" })
        } else {
            res.send({ msg: "Pessoa deletada com sucesso" });
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao deletar a Pessoa" });
    });
};
