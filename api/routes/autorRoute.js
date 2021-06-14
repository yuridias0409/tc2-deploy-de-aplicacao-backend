module.exports = app => {
    const controller = require('../controllers/AutorController')();

    //POST
    app.route('/api/allAutor').post(controller.listAllAutores);

    app.route('/api/listUmAutor').post(controller.listUmAutor);

    app.route('/api/addUmAutor').post(controller.addUmAutor);

    app.route('/api/removeAutor').post(controller.removeAutor);

    app.route('/api/updateAutor').post(controller.updateAutor);

}