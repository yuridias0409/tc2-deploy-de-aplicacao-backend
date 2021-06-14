module.exports = app => {
    const controller = require('../controllers/LoginController')();

    //POST
    app.route('/api/login').post(controller.validadeLogin);
}