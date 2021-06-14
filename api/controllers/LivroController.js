const Livro = require("../model/Livro.js");

require("../model/Livro.js");

module.exports = () => {
    const livroDAO = require('../DAO/LivroDAO.js');
    const controller = {};
    
    //Retorna todos os livros
    controller.listAllLivros = function(req, res){
        const query = req.query;
        try {
            return res.status(200).json({ 'status': 'Success', 'data': livroDAO.selectAllLivros(query.userid)});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Livro não encontrado.'});
        }
    }

    //Retorna um livro específico
    controller.listUmLivro = function(req, res){
        const query = req.query;
        try {
            return res.status(200).json({ 'status': 'Success', 'data': livroDAO.selectUmLivro(query.id)});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Livro não encontrado.'});
        }
    }

    //Adiciona um livro
    controller.addUmLivro = function(req, res){
        const query = req.query;
        const livro = new Livro(null, query.nome, query.genero, query.pages, query.autor);
        try {
            livroDAO.insereLivro(livro, query.userid);
            return res.status(200).json({ 'status': 'Success', 'message': 'Livro inserido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na inserção do livro.'});
        }
    }

    //Atualiza um livro
    controller.updateLivro = function(req, res){
        const query = req.query;
        const livro = new Livro(query.id, query.nome, query.genero, query.pages, query.autor);
        try {
            livroDAO.updateLivro(livro);
            return res.status(200).json({ 'status': 'Success', 'message': 'Dados do livro foram atualizados com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na atualização do livro.'});
        }
    }

    //Remove um Livro
    controller.removeLivro = function(req, res){
        const query = req.query;
        try {
            livroDAO.removeLivro(query.id);
            return res.status(200).json({ 'status': 'Success', 'message': 'Livro removido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na remoção do livro.'});
        }  
    }


    return controller;
}