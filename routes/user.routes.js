const controller = require('../controllers/user.controller');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/users')
    .post(controller.add)
    .get(validateToken, controller.getAll);

    router.route('/login')
    .post(controller.login);
}