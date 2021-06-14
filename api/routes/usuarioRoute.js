module.exports = app => {
    const controller = require('../controllers/UsuarioController')();

    //GET
    app.route('/api/allUsuario').get(controller.listAllUsuarios);

    //POST
    app.route('/api/listUmUsuario').post(controller.listUmUsuario);

    app.route('/api/addUmUsuario').post(controller.addUmUsuario);

    app.route('/api/removeUsuario').post(controller.removeUsuario);

    app.route('/api/updateUsuario').post(controller.updateUsuario);
}