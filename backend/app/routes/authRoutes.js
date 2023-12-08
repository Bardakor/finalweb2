module.exports = function(app) {
    var auth = require('../controllers/authController.js');

    app.post('/auth/register', auth.register);

    app.post('/auth/login', auth.login);

}
