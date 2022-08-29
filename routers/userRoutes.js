const UserController = require('../controllers/userController');
const passport = require('passport');

module.exports = app => {
  app.get('/users', UserController.findAll);

  app.post('/users', UserController.create);

  app.get(
    '/users/login',
    passport.authenticate('basic', { session: false }),
    UserController.login,
  );

  app
    .route('/users/:id')
    .get(UserController.findById)
    .put(UserController.update)
    .delete(UserController.delete);
};
