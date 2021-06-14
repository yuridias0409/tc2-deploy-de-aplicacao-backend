module.exports = app => {
    const controller = require('../controllers/LivroController')();

    //POST
    app.route('/api/allLivro').post(controller.listAllLivros);

    app.route('/api/listUmLivro').post(controller.listUmLivro);

    app.route('/api/addUmLivro').post(controller.addUmLivro);

    app.route('/api/removeLivro').post(controller.removeLivro);

    app.route('/api/updateLivro').post(controller.updateLivro);
}