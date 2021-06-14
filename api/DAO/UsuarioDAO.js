require("../model/Usuario.js");

exports.insereUsuario = function (usuario) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.insert('usuario', { username: usuario.username, password: usuario.password, email: usuario.email });
    sqlite.close();
}

exports.removeUsuario = function (id) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.delete('usuario', { id: id });
    sqlite.close();
}

exports.updateUsuario = function (usuario) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    sqlite.update('usuario', { username: usuario.username, password: usuario.password, email: usuario.email }, { id: usuario.id })
    sqlite.close();
}

exports.selectUmUsuario = function (id) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var rows = sqlite.run("SELECT * FROM usuario WHERE id = ?", [id]);
    sqlite.close();
    return rows;
}

exports.selectUmUsuarioWithUsername = function (username) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var rows = sqlite.run("SELECT * FROM usuario WHERE username = ?", [username]);
    sqlite.close();
    return rows;
}

exports.selectAllUsuarios = function () {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var rows = sqlite.run("SELECT * FROM usuario");
    sqlite.close();
    return rows;
}

exports.usernameValidation = function (username) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var rows = sqlite.run("SELECT * FROM usuario where username = ? LIMIT 1;", [username]);
    sqlite.close();

    if(rows.length>0){
        if(user[0].username == username){
            return false;
        } else{
            return true;
        }
    } else {
        return true;
    }
}

exports.selectLoginUsuario = function (username, password) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var rows = sqlite.run("SELECT * FROM usuario where username = ? and password = ? LIMIT 1;", [username, password]);
    sqlite.close();
    return rows;
}

exports.validateLogin = function (username, password) {
    var sqlite = require('sqlite-sync');
    sqlite.connect('mypersonallibrary.db');
    var user = sqlite.run("SELECT * FROM usuario where username = ? LIMIT 1;", [username]);
    sqlite.close();

    if(user.length>0){
        if(user[0].password == password){
            return true;
        } else{
            return false;
        }
    } else {
        return false;
    }
    
}


