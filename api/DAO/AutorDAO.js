require("../model/Autor.js");

exports.insereAutor = function (autor, userid) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.insert('autor', { nome: autor.nome, usuario: userid });
    sqlite.close();
}

exports.removeAutor = function (id) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.delete('autor', { id: id });
    sqlite.close();
}

exports.updateAutor = function (autor) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.update('autor', { nome: autor.nome }, { id: autor.id })
    sqlite.close();
}

exports.selectUmAutor = function (id) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var rows = sqlite.run("SELECT * FROM autor WHERE id = ?", [id]);
    sqlite.close();
    return rows;
}

exports.selectAllAutor = function (userid) {
    var sqlite = require('sqlite-sync');
    sqlite.connect("mypersonallibrary.db");
    var rows = sqlite.run('SELECT * FROM autor WHERE usuario = ?', [userid]);
    sqlite.close();
    return rows;
}
