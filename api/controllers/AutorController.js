const Autor = require("../model/Autor.js");

require("../model/Autor.js");

module.exports = () => {
    const autorDAO = require('../DAO/AutorDAO.js');
    const controller = {};
    
    //Retorna todos os Autores
    controller.listAllAutores = function(req, res){
        const query = req.query;
        try {
            return res.status(200).json({ 'status': 'Success', 'data': autorDAO.selectAllAutor(query.userid)});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Nenhum autor encontrado.'});
        }  
    }

    //Retorna um autor específico
    controller.listUmAutor = function(req, res){
        const query = req.query;
        try {
            return res.status(200).json({ 'status': 'Success', 'data':autorDAO.selectUmAutor(query.id)});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Autor não encontrado.'});
        }  
    }

    //Adiciona um autor
    controller.addUmAutor = function(req, res){
        const query = req.query;
        const autor = new Autor(null, query.nome);
        try {
            autorDAO.insereAutor(autor, query.userid);
            return res.status(200).json({ 'status': 'Success', 'message': 'Autor inserido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na inserção do autor.'});
        }
    }

    //Atualiza um autor
    controller.updateAutor = function(req, res){
        const query = req.query;
        try {
            autorDAO.updateAutor({id: query.id, nome: query.nome});
            return res.status(200).json({ 'status': 'Success', 'message': 'Dados do autor foram atualizados com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na atualização do autor.'});
        }
    }

    //Remove um autor
    controller.removeAutor = function(req, res){
        const query = req.query;
        try {
            autorDAO.removeAutor(query.id);
            return res.status(200).json({ 'status': 'Success', 'message': 'Autor removido com sucesso!'});
        } catch (error) {
            return res.status(400).json({ 'status': 'Failed', 'message': 'Falha na remoção do autor.'});
        }  
    }

    return controller;
}